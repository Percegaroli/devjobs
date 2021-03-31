import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ApplyNowCard from '../../UI/molecules/ApplyNowCard';
import CompanyCard from '../../UI/molecules/CompanyCard';
import Header from '../../UI/organisms/Header';
import JobDescription from '../../UI/organisms/JobDescription';
import styles from './JobDetails.module.scss';

const JobDetails = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={` ${styles.Container} ${styles[theme]}`}>
      <Header
        setJobs={() => {}}
      />
      <div className={styles.CardContained}>
        <CompanyCard
          companyLogo="aaa"
          companyName="So Digital Inc."
          companySite="sodigital.co"
        />
      </div>
      <JobDescription
        className={styles.Description}
        description="<p>Spezialist (d/m/w) MSSQL &amp; IIS</p><p>Seit mehr als 130 Jahren legen Versicherte in Deutschland ihre Risiken des Alltags vertrauensvoll in die Hände der DEVK Versicherungen. Heute ist die DEVK bundesweit präsent und betreut die persönlichen Anliegen von über vier Millionen Kunden in allen Versicherungssparten.</p><p>Sie fühlen sich sind in der Welt von Windows Server Anwendungen und im Bereich IIS &amp; MS SQL zuhause? Als Spezialist MSSQL &amp; IIS kümmern Sie sich um die Bereitstellung von MS-SQL-Datenbanken und die MS-IIS Webserverdienste für unsere internen Kunden. Perspektivisch gestalten Sie zudem den Weg in die Cloud mit, damit unsere Anwendungen auch in einem Cloudkontext betrieben werden können.</p><p>Ihre Aufgaben</p><ul><li>Bereitstellung, Optimierung und Wartung von Microsoft SQL-Datenbanken:</li><li>Anpassung der Datenbanken</li><li>Vergabe von Zugriffsrechten auf den SQL-Server</li><li>Übertragung von Daten / Datenbanken zwischen Produktion und Testumgebungen</li><li>Betrieb und Support der Schnittstellen der Anwendungen Richtung Datenbankserver (Microsoft SQL ODBC, OLEDB, Native Client)</li><li>Konfiguration und Administration des Microsoft Webservers IIS (Einspielen von SSL Zertifikaten, Kerberos Authentifizierung, Pool Configuration…)</li><li>Bereitstellung und Betreuung von IIS-Webservern zur Nutzung durch Fachanwendungen inklusive Sicherheitskonfiguration</li><li>Enge Zusammenarbeit mit den Fachbereichen sowie Unterstützung und Beratung der anderen IT-Abteilungen</li><li>Mitarbeit in Projekten</li></ul><p>Ihr Profil</p><ul><li>Erfolgreich abgeschlossenes IT-Studium oder entsprechende Ausbildung mit mehrjähriger Berufserfahrung</li><li>Erfahrung in Entwicklung und Betrieb von Windows Server Umgebungen</li><li>Sicherer Umgang mit Komponenten des Windows Server Betriebssystems und der relevanten Services</li><li>Sehr gute Kenntnisse im Bereich Bereitstellung, Wartung und Optimierung von MS-SQL-Datenbanken</li><li>Gute Kenntnisse des MS SQL-Server-Datenbanksystems auch im geclusterten Betrieb gepaart mit vertieften Kenntnissen in TSQL</li><li>Einschlägige Erfahrungen mit den Microsoft IIS Webservices inklusive Verschlüsselungs- und Authentifizierungskonfiguration sowie Webtechnologien</li><li>Ausbaufähige Grundkenntnisse der Scriptsprache Powershell</li><li>Spaß an modernen Technologien und Freude daran neu Gelerntes weiterzugeben</li></ul><p>Unsere Benefits</p><ul><li>Sichere Arbeitsplätze in einem stetig wachsenden Unternehmen</li><li>Eine hervorragende arbeitgeberfinanzierte betriebliche Altersversorgung</li><li>Flexible Arbeitszeitmodelle</li><li>Möglichkeit für Homeoffice / Mobiles Arbeiten</li><li>Stark vergünstigtes Job-Ticket</li></ul><p>Informieren Sie sich über unsere weiteren Benefits. Wir freuen uns darauf, Sie persönlich kennenzulernen. Falls Sie noch Fragen haben, rufen Sie uns gerne an.</p><p>Ihr AnsprechpartnerTanja WillingTel.: +49 221 757-1154</p>"
      />
      <ApplyNowCard className={styles.ApplyNowCard} />
    </div>
  );
};

export default JobDetails;
