import { useState, useEffect } from "react";
import { ExtendedCountryInfo, CountryInfo } from "../types/Country";
import SmallCountryCard from "../components/SmallCountryCard";
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates,
    rectSwappingStrategy,
} from "@dnd-kit/sortable";

import {
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    TouchSensor,
    UniqueIdentifier,
    closestCorners,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { Loading, Section } from "../components";

const DragAndDrop = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [countries, setCountries] = useState<ExtendedCountryInfo[] | []>([]);

    const getData = async (url: string) => {
        const res = await fetch(url);
        const json = await res.json();
        return json;
    };

    const getCountryPos = (id: UniqueIdentifier | undefined) =>
        countries.findIndex((country) => country.id === id);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id === over?.id) return;

        setCountries((countries) => {
            const origianalPos = getCountryPos(active.id);
            const newPos = getCountryPos(over?.id);
            return arrayMove(countries, origianalPos, newPos);
        });
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        setLoading(true);
        setError(false);

        getData("https://restcountries.com/v3.1/all")
            .then((data: CountryInfo[]) => {
                setCountries(
                    data
                        .filter(
                            (country) => country.languages?.["ara"] === "Arabic"
                        )
                        .filter((country) => country.name.common !== "Israel")
                        .map((country, i) => ({ ...country, id: i + 1 }))
                        .sort((a, b) =>
                            a.name.common.localeCompare(b.name.common)
                        )
                );
                setLoading(false);
            })
            .catch(() => setError(true));
    }, []);

    let content;

    if (loading)
        content = (
            <div className="flex grow h-full justify-center items-center">
                <Loading />
            </div>
        );
    else if (error) content = <p>Something went wrong while fetching data</p>;
    else
        content = (
            <div className="container grid lg:grid-rows-8 gap-1 lg:grid-flow-col">
                {!!countries.length &&
                    countries.map((country) => (
                        <SmallCountryCard
                            country={country}
                            id={country.id}
                            key={country.id}
                        />
                    ))}
            </div>
        );

    return (
        <DndContext
            onDragEnd={handleDragEnd}
            collisionDetection={closestCorners}
            sensors={sensors}
        >
            <Section
                title="Drag and Drop"
                paragraph="Sort the Countries Using Drag and Drop"
                id="drag-and-drop"
            >
                <SortableContext
                    items={countries}
                    strategy={rectSwappingStrategy}
                >
                    {content}
                </SortableContext>
            </Section>
        </DndContext>
    );
};
export default DragAndDrop;
