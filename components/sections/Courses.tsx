"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courseGroups } from "@/data/courses";
import { education } from "@/data/education";
import type { Course } from "@/lib/types";
import styles from "./Courses.module.css";

function totalHours(hours: string[]) {
  return hours.reduce((sum, value) => sum + Number.parseInt(value, 10), 0);
}

export function Courses() {
  const [openGroup, setOpenGroup] = useState<string | null>(courseGroups[0]?.id ?? null);
  const [selected, setSelected] = useState<Course | null>(null);

  return (
    <section id="cursos" className="section" aria-labelledby="cursos-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="cursos-title"
            number="05"
            eyebrow="Formação"
            title="Formação acadêmica e complementar"
            description="Graduação em andamento, além de cursos e bootcamps concluídos."
          />
        </Reveal>

        {education.map((item) => (
          <Reveal key={item.id}>
            <article className={styles.academic}>
              <span className={styles.logo}>
                <Image
                  src={item.logo}
                  alt={`Logo da ${item.institution}`}
                  width={120}
                  height={120}
                  className={styles.logoImage}
                />
              </span>
              <div>
                <div className={styles.academicHeading}>
                  <h3>{item.course}</h3>
                  <span className={styles.status}>{item.status}</span>
                </div>
                <p className={styles.institution}>
                  {item.institution} · {item.period}
                </p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}

        <h3 className={styles.subheading}>Cursos e bootcamps</h3>

        <div className={styles.groups}>
          {courseGroups.map((group, index) => {
            const open = openGroup === group.id;
            const panelId = `cursos-${group.id}`;
            const hours = totalHours(group.courses.map((course) => course.hours));

            return (
              <Reveal key={group.id} delay={index * 70}>
                <article className={styles.group}>
                  <h4 className={styles.groupTitle}>
                    <button
                      type="button"
                      className={styles.trigger}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenGroup(open ? null : group.id)}
                    >
                      <span className={styles.logo}>
                        <Image
                          src={group.logo}
                          alt={`Logo da ${group.institution}`}
                          width={160}
                          height={160}
                          className={styles.logoImage}
                        />
                      </span>
                      <span className={styles.groupInfo}>
                        <span className={styles.groupName}>{group.institution}</span>
                        <span className={styles.groupMeta}>
                          {group.courses.length}{" "}
                          {group.courses.length === 1 ? "curso" : "cursos"} · {hours}h
                        </span>
                      </span>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
                      />
                    </button>
                  </h4>

                  <div id={panelId} className={styles.panel} hidden={!open}>
                    <p className={styles.summary}>{group.summary}</p>
                    <ul className={styles.list}>
                      {group.courses.map((course) => (
                        <li key={course.id} className={styles.course}>
                          <div className={styles.courseTop}>
                            <h5>{course.title}</h5>
                            <span className={styles.courseMeta}>
                              {course.year} · {course.hours}
                            </span>
                          </div>
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
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
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
