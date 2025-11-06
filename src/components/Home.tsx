
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Varun Kumar</h1>
        <p className={styles.subtitle}>Full-Stack Developer (MERN) • Software Engineer at Eice Infotech</p>
        <p className={styles.tagline}>1+ years of experience · India</p>
      </header>

      {/* About Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.text}>
          I am Varun Kumar, a full-stack developer specializing in MERN stack, PHP (MVC), Electron, and scalable
          systems. I build production-grade apps for hotels, restaurants, bars, parking systems, and enterprise
          clients.
        </p>
        <p className={styles.text}>
          I focus on responsive UI, backend architecture, CI/CD automation, VPS deployments, and performance
          optimization across multiple platforms.
        </p>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.skillsGrid}>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>PHP (MVC)</li>
          <li>Electron.js</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>MySQL</li>
          <li>C++ / DSA</li>
          <li>JavaScript (Advanced)</li>
          <li>CI/CD + VPS Deployment</li>
        </ul>
      </section>

      {/* Projects */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <ul className={styles.projectList}>
          <li><strong>Isync Drive (React)</strong> – Cloud file sync UI.</li>
          <li><strong>Govdrive (Electron)</strong> – Secure desktop drive system.</li>
          <li><strong>Durgabari (PHP)</strong> – Temple & booking management system.</li>
          <li><strong>NIC Govdrive (Electron)</strong> – Security-enhanced desktop module.</li>
          <li><strong>Company Website (React)</strong> – Modern corporate website.</li>
        </ul>
      </section>

      {/* Experience */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <p className={styles.text}>
          <strong>Software Engineer – Eice Infotech Pvt Ltd</strong> (April 2024 – Present)<br />
          Working on React, Electron, PHP, backend systems, automation pipelines, and client applications.
        </p>
      </section>

      {/* Contact */}
      <section className={styles.sectionCenter}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p>Email: varunkumar953685@gmail.com</p>
        <p>Phone: 9536855214</p>
      </section>

      <footer className={styles.footer}>© {new Date().getFullYear()} Varun Kumar. All rights reserved.</footer>
    </div>
  );
}
