const Experience: React.FC = () => {
  return (
    <div className=" flex flex-row  w-[100%] rounded p-4 place-content-evenly items-center justify-center h-[80vh]">
      <div className="rounded border-2 custom-border m-4 max-h-[80%]">
        <a href="https://www.intercom.com">
          <h2 className="ml-4 text-xl">Intercom</h2>
        </a>
        <p className="py-2 px-4">
          From September to December 2023, I worked on Intercom’s data
          infrastructure team. I gained experience working with data related
          problems, whether that was data ingestion, cost optimization, data
          quality or scalability. I got to refactor a large ingestion pipeline,
          which meant looking to remove existing technologies like Kinesis. I
          worked around issues such as scalability, the speed of ingestion and
          ensuring the new pipeline was cost efficient and maintained the
          existing data quality. This meant pulling data from all the sources
          the existing pipeline read from.
        </p>
      </div>
      <div className=" rounded border-2  custom-border m-4 max-h-[80%]">
        <a href="https://www.viotas.com">
          <h2 className="ml-4 text-xl">VIOTAS</h2>
        </a>
        <p className="py-2 px-4">
          Throughout the summer of 2023, I spent 10 weeks working as a software
          engineering intern on the software systems team at VIOTAS. The first
          few weeks allowed me to spend time learning the codebase and work on
          refactoring parts of it. After this I integrated into a small team of
          frontend developers to build an internal platform for field engineers.
          I gained experience with Vue.js, Carbon Components design system and
          working with the API’s in the company's microservices architecture.
        </p>
      </div>
      <div className=" rounded border-2  custom-border m-4 max-h-[80%]">
        <a href="https://www.transactcampus.com">
          <h2 className="ml-4 text-xl">Transact Campus</h2>
        </a>
        <p className="py-2 px-4">
          During the summer of 2024, I worked on a UI/UX design team building
          out a shared components library used by product teams. I specifically
          worked on a feature toggling component which allowed users to toggle
          features on / off in different deployment environments. I also
          developed a management page for a particular service that polled data
          periodically. Some key technologies included Typescript, Angular, NX
          monorepo tooling and storybook.
        </p>
      </div>
    </div>
  );
};

export default Experience;

{
  /* <div className=" rounded border-2  custom-border mt-3">
<h3 className="ml-4">Intercom</h3>
<p className="py-2 px-4">
  From September to December 2023, I worked on Intercom’s data
  infrastructure team. I gained experience working with data related
  problems, whether that was data ingestion, cost optimization, data
  quality or scalability. I got to refactor a large ingestion
  pipeline, which meant looking to remove existing technologies like
  Kinesis. I worked around issues such as scalability, the speed of
  ingestion and ensuring the new pipeline was cost efficient and
  maintained the existing data quality. This meant pulling data from
  all the sources the existing pipeline read from.
</p>
</div>
<div className=" rounded border-2  custom-border mt-3">
<h3 className="ml-4">VIOTAS</h3>
<p className="py-2 px-4">
  Throughout the summer of 2023, I spent 10 weeks working as a
  software engineering intern on the software systems team at VIOTAS.
  The first few weeks allowed me to spend time learning the codebase
  and work on refactoring parts of it. After this I integrated into a
  small team of frontend developers to build an internal platform for
  field engineers. I gained experience with Vue.js, Carbon Components
  design system and working with the API’s in the company's
  microservices architecture.
</p>
</div>
<div className=" rounded border-2  custom-border mt-3">
<h3 className="ml-4">Transact Campus</h3>
<p className="py-2 px-4">
  During the summer of 2024, I worked on a UI/UX design team building
  out a shared components library used by product teams. I
  specifically worked on a feature toggling component which allowed
  users to toggle features on / off in different deployment
  environments. I also developed a management page for a particular
  service that polled data periodically. Some key technologies
  included Typescript, Angular, NX monorepo tooling and storybook
</p>
</div> */
}
