import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl w-full space-y-12 text-center">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
            Wink Wink Pink
          </h1>
          <p className="text-xl text-pink-100">
            Where creativity meets elegance in shades of pink and purple
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Elegance</h3>
            <p className="text-pink-100">
              Discover the perfect blend of style and sophistication
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Creativity</h3>
            <p className="text-pink-100">
              Express yourself through vibrant colors and unique designs
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-pink-100">
              Pushing boundaries with modern aesthetics
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">Ready to join the pink revolution?</h2>
          <div className="flex gap-4 justify-center">
            <Link href="#contact" className="btn-primary">
              Get Started
            </Link>
            <Link href="#about" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-center text-pink-200">
        <p>&copy; 2024 Wink Wink Pink. All rights reserved.</p>
      </footer>
    </div>
  );
}
