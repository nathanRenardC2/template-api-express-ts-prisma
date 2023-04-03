import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Artistes
  const artist1 = await prisma.artist.create({
    data: {
      name: 'Artiste 1',
    },
  });

  const artist2 = await prisma.artist.create({
    data: {
      name: 'Artiste 2',
    },
  });

  // Genres
  const genre1 = await prisma.genre.create({
    data: {
      name: 'Genre 1',
    },
  });

  const genre2 = await prisma.genre.create({
    data: {
      name: 'Genre 2',
    },
  });

  // Albums
  const album1 = await prisma.album.create({
    data: {
      title: 'Album 1',
      artistId: artist1.id,
    },
  });

  const album2 = await prisma.album.create({
    data: {
      title: 'Album 2',
      artistId: artist2.id,
    },
  });

  // Tracks
  await prisma.track.create({
    data: {
      title: 'Piste 1',
      genreId: genre1.id,
      albumId: album1.id,
    },
  });

  await prisma.track.create({
    data: {
      title: 'Piste 2',
      genreId: genre2.id,
      albumId: album2.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
