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
      content: `Di SMA kelas 11, saya pertama kali diperkenalkan dengan dunia programming—sebuah dunia yang penuh tantangan dan peluang. Dengan semangat yang tinggi, saya menulis kode pertama saya dalam Python menggunakan perintah sederhana, print("hello world"). Momen ini membuka pintu bagi perjalanan panjang saya dalam pengembangan perangkat lunak.`,
      images: ["/journey/python.png", "/journey/vscode.png"],
    },
    {
      title: "Phase 2",
      content:
        "Saat minat saya pada programming berkembang, saya menyadari bahwa ini lebih dari sekadar hobi—ini adalah passion saya. Dengan tekad yang kuat, saya melanjutkan studi di jurusan Informatika di Universitas Islam Indonesia untuk memperdalam ilmu saya.",
      images: ["/journey/Figma.png", "/journey/uii.webp"],
    },
    {
      title: "Phase 3",
      content:
        "Pada semester 3 kuliah, saya mulai memfokuskan minat saya pada bidang backend engineering. Kecintaan saya terhadap algoritma dan struktur data membawa saya untuk mulai membuat RESTful API sebagai langkah awal dalam perjalanan profesional saya.",
      images: ["/journey/java.png", "/journey/php.png", "/journey/express.png", "/journey/mysql.svg"],
    },
    {
      title: "Phase 4",
      content: "Saat ini, saya terus mengembangkan pengetahuan saya dengan mempelajari framework yang lebih terstruktur dan mengeksplorasi peran frontend engineering, memperluas keahlian saya dalam pengembangan aplikasi secara menyeluruh.",
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
