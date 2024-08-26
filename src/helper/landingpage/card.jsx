import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CardProjectComponent({ title, description, img }) {
  return (
    <Card className="w-full laptop:w-5/12 bg-blue-950 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="relative w-full p-0">
        <img
          src={img}
          className="w-full h-52 object-cover"
          alt="Project Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <CardTitle className="absolute bottom-4 left-4 text-white text-xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-white whitespace-pre-wrap">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
