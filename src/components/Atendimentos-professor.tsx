import * as React from "react"
 
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

export const VisualizarAtendimentos = () => {
    const content = [
        {
            title: "Aulas de Hoje",
            items: [
                { name: "Raspadão", time: "18:30" },
                { name: "", time: "" },
            ],
        },
        {
            title: "Aulas de Amanhã",
            items: [
                { name: "Mergulho", time: "18:30" },
                { name: "", time: "" },
            ],
        },
    ];
    return (
        <>
             {/* Aulas de Hoje */}
             <div className="px-6">
                <h2 className="text-lg font-semibold">Aulas de Hoje</h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="mt-4 w-full max-w-3xl"
                >
                    <CarouselContent>
                        {/* Page 1 */}
                        <CarouselItem className="basis-1/2 ">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="p-6">
                                        <p>Raspadão</p>
                                        <p className="text-orange-500">18:30</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                        {/* Page 2 */}
                        <CarouselItem className="basis-1/2 ">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="p-6">
                                        <p>Some content on Page 2</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                        {/* Page 3 */}
                        <CarouselItem className="basis-1/2 ">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="p-6">
                                        <p>Some content on Page 3</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* Aulas de Amanhã */}
            <div className="mt-8 px-8">
                <h2 className="text-lg font-semibold">Aulas de Amanhã</h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="mt-4 w-full max-w-3xl"
                >
                    <CarouselContent>
                        {/* Page 1 */}
                        <CarouselItem className="basis-1/2 ">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="p-6">
                                        <p>Mergulho</p>
                                        <p className="text-orange-500">18:30</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                        {/* Page 2 */}
                        <CarouselItem className="basis-1/2 ">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="p-6">
                                        <p>Some other content on Page 2</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                        {/* Page 3 */}
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="p-6">
                                        <p>Some other content on Page 3</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
};

export const QuantidadeAtendimentos = () => {
    return (
        <>
            <div className="mt-8">
                <h2 className="text-lg font-semibold">Quantidade de Atendimentos</h2>
                <div className="mt-4 p-4 bg-gray-200 rounded shadow flex justify-between items-center">
                    <p>
                        <span className="font-semibold">Modalidade:</span> Futebol
                    </p>
                    <p className="text-orange-500 font-bold text-lg">12</p>
                </div>
            </div>
        </>
    );
};

export const AtendimentosAnteriores = () => {
    return (
        <>
            <div>
                <h2 className="text-lg font-semibold">Atendimentos Anteriores</h2>
                <div className="mt-4 flex gap-4">
                    <select className="p-2 bg-white border rounded shadow">
                        <option>Data</option>
                    </select>
                    <select className="p-2 bg-white border rounded shadow">
                        <option>Local</option>
                    </select>
                </div>

                <div className="mt-4 bg-gray-200 p-4 rounded shadow">
                    <div className="grid grid-cols-3 gap-4 text-gray-600">
                        <p>Data</p>
                        <p>Local</p>
                        <p>Atendimento</p>
                    </div>
                </div>
            </div>

        </>
    );
};
