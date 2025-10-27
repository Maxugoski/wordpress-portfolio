export const ClientLogos = () => {
  const clients = [
    "TechCorp",
    "DataFlow",
    "CloudSync",
    "DevTools",
    "WebPro",
    "CodeBase"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {clients.map((client) => (
            <div 
              key={client}
              className="text-2xl font-bold tracking-tight text-muted-foreground hover:text-foreground transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
