import AnimateInView from '@/components/animate-in-view';

export default function About() {
  return (
    <section id="about" className="bg-secondary/50 py-20 md:py-32">
      <div className="container">
        <AnimateInView>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Tentang TelluNi Fashion Store
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              TelluNi Fashion Store adalah butik rental spesialis Baju Bodo, pakaian adat suku Bugis-Makassar yang anggun dan sarat makna. Kami percaya bahwa setiap orang berhak tampil memukau di momen spesialnya tanpa harus mengeluarkan biaya besar. Dengan koleksi yang terawat baik dan desain yang otentik, kami hadir untuk mempercantik hari bahagiamu.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Nilai kami adalah memberikan pelayanan terbaik, kualitas busana premium, dan kemudahan dalam setiap proses penyewaan. Biarkan kami menjadi bagian dari cerita indahmu.
            </p>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
