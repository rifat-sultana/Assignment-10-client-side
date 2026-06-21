import BookDetails from "../../../components/BookDetails";

export default async function BookDetailsPage({ params }) {
  const { id } = await params;

  return <BookDetails bookId={id} />;
}