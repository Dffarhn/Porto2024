import { useMediaQuery } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import TimelineContentComponent from "./componentTimeline";

export default function TimelineContainer() {
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  const timelineData = [
    {
      title: "Phase 1",
      content: `In 11th grade I was introduced to programminga world full of challenges and opportunity. I wrote my first Python code with a simple print("hello world"). That moment opened the door to a long journey in software development.`,
      images: ["/journey/python.png", "/journey/vscode.png"],
    },
    {
      title: "Phase 2",
      content:
        "As my interest grew, I realized programming was more than a hobbyit was what I wanted to pursue. I continued my studies in Informatics at Universitas Islam Indonesia to go deeper.",
      images: ["/journey/Figma.png", "/journey/uii.webp"],
    },
    {
      title: "Phase 3",
      content:
        "By my third semester I focused on backend engineering. My love for algorithms and data structures led me to build RESTful APIs as an early step in my professional path.",
      images: ["/journey/java.png", "/journey/php.png", "/journey/express.png", "/journey/mysql.svg"],
    },
    {
      title: "Phase 4",
      content:
        "Today I keep leveling up with more structured frameworks and frontend engineering, broadening my skills across the full stack.",
      images: ["/journey/nestjs.png", "/journey/postgresql.png", "/journey/astro.png", "/journey/tailwind.webp"],
    },
  ];

  return (
    <Timeline
      position={isLaptop ? "alternate-reverse" : "right"}
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0,
        },
      }}
    >
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          {isLaptop ? null : <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>}
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContentComponent title={item.title} content={item.content} images={item.images} />
        </TimelineItem>
      ))}
    </Timeline>
  );
}
