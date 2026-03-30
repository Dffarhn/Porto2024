import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CardProjectComponent({ title, subtitle, description, features, techStack, impact, img }) {
  return (
    <Card className="w-full laptop:w-5/12 bg-blue-950 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="relative w-full p-0">
        <img
          src={img}
          className="w-full h-52 object-cover"
          alt="Project Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <CardTitle className="text-white text-xl font-bold mb-1">
            {title}
          </CardTitle>
          {subtitle && (
            <p className="text-white text-sm opacity-90">{subtitle}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <CardDescription className="text-white whitespace-pre-wrap">
          {description}
        </CardDescription>
        
        {features && features.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Key features:</h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        {techStack && techStack.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span key={index} className="text-xs bg-blue-800 text-white px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {impact && (
          <div className="pt-2 border-t border-gray-700">
            <h4 className="text-sm font-semibold text-green-400 mb-1">Impact:</h4>
            <p className="text-sm text-gray-300">{impact}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
