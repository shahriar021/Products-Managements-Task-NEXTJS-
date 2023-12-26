import { useRouter } from "next/router";

export default function productInfo() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Specific Info for ID: {id}</h1>
      {/* Add your product-specific content here */}
    </div>
  );
}
