export function TailwindIndicator() {
  return (
    <div className="fixed bottom-8 right-8 flex size-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
      <div className="sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
