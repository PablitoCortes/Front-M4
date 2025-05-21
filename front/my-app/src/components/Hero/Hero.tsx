import { Button } from '../ui/Button'

export const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('[data-section="products"]');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Precision hardware for brilliant minds
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From processors to peripherals — everything your system needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="rounded-full"
              onClick={scrollToProducts}
            >
              Find yours
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}