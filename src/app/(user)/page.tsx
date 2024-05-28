import { Banner } from "@src/features/home/Banner";
import { FeaturedProducts } from "@src/features/home/FeaturedProducts";
import { TopCategories } from "@src/features/home/TopCategories";
import { IFeaturedItems } from "@src/model";
import { client } from "@utils/sanity.client";
import { groq } from "next-sanity";

const getAllFeaturedItemsQueries = groq`
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`;

const getFeaturedItemsAsync = () => {
  return client.fetch(getAllFeaturedItemsQueries);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const featuredItems: IFeaturedItems[] = await getFeaturedItemsAsync();

  return (
    <main>
      <Banner />

      {featuredItems[0] && featuredItems[0].topCategories && (
        <TopCategories categories={featuredItems[0].topCategories} />
      )}
      {/* <TopCategories categories={featuredItems[0].topCategories} /> */}

      {featuredItems[0] && featuredItems[0].bestDeals && (
        <FeaturedProducts
        idd="Deals"
          title="Best Deals For You"
          products={featuredItems[0].bestDeals}
        />
      )}
      {/* <FeaturedProducts
        title="Best Deals For You"
        products={featuredItems[0].bestDeals}
      /> */}

      {featuredItems[0] && featuredItems[0].mostSellingProducts && (
        <FeaturedProducts
          title="Most Selling Products"
          idd="most_Selling_products"
          products={featuredItems[0].mostSellingProducts}
        />
      )}

      {/* <FeaturedProducts
        title="Most Selling Products"
        products={featuredItems[0].mostSellingProducts}
      /> */}

      {featuredItems[0] && featuredItems[0].trendingProducts && (
        <FeaturedProducts
        idd="Trending"
          title="Trending Products"
          products={featuredItems[0].trendingProducts}
        />
      )}
      {/* <FeaturedProducts
        title="Trending Products"
        products={featuredItems[0].trendingProducts}
      /> */}
    </main>
  );
}
