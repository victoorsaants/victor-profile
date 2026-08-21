"use client";

import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/data/courses";
import type { Course } from "@/lib/types";
import styles from "./Courses.module.css";

export function Courses() {
  const [selected, setSelected] = useState<Course | null>(null);

  return (
    <section id="cursos" className="section" aria-labelledby="cursos-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="cursos-title"
            number="05"
            eyebrow="Cursos"
            title="Formação complementar"
            description="Cursos e bootcamps concluídos."
          />
        </Reveal>

        <div className={styles.grid}>
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={index * 70}>
              <article className={styles.card}>
                <div className={styles.top}>
                  <span className={styles.icon} aria-hidden="true">
                    <GraduationCap size={18} />
                  </span>
                  <p className={styles.year}>
                    {course.year} · {course.hours}
                  </p>
                </div>
                <h3>{course.title}</h3>
                <p className={styles.institution}>{course.institution}</p>
                <p className={styles.description}>{course.description}</p>
                {course.credential ? (
                  <button
                    type="button"
                    className={styles.credential}
                    onClick={() => setSelected(course)}
                  >
                    Ver certificado
                  </button>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(selected?.credential)}
        title={selected ? `Certificado · ${selected.title}` : "Certificado"}
        onClose={() => setSelected(null)}
      >
        {selected?.credential ? (
          <Image
            src={selected.credential}
            alt={`Certificado de ${selected.title}`}
            width={1280}
            height={800}
            className={styles.certificate}
          />
        ) : null}
      </Modal>
    </section>
  );
}
