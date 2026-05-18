"use client";
import { ModeProductInformation, ReviewDemo } from "@/app/contants/data";
import { useProduct } from "@/app/hooks/useProduct";
import { useStore } from "@/app/store/cart.store";
import Benefit from "@/components/modules/Benefit";
import Container from "@/components/modules/layout/Container";
import Loading from "@/components/modules/Loading";
import AddToCartButton from "@/components/modules/product/AddToCartButton";
import FavoriteClient from "@/components/modules/product/FavoriteClient";
import MoreInformation from "@/components/modules/product/MoreInformation";
import NoProductAvailable from "@/components/modules/product/NoProductAvailable";
import SortDetails from "@/components/modules/product/SortDetails";
import Raiting from "@/components/modules/Raiting";
import ReviewsClient from "@/components/modules/review/ReviewsClient";
import { Button } from "@/components/ui/button";
import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { ArrowDown, ArrowUp, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getProductBySlug, products, isLoading } = useProduct();
  const [imageShow, setImageShow] = useState<string>("");
  const [modeInformation, setModeInformation] = useState("description");
  const [showMore, setShowMore] = useState(false);
  const quantity = useStore(
      (state) =>
        state.items.find((item) => item.product._id === products[0]?._id)?.quantity ||
        0,
    );

  const {addItem,removeItem} = useStore()

  const handleChangeModeInformation = (mode: string) => {
    setModeInformation(mode);
  };

  const handleAddItem = (product:Product)=>{
      if(quantity < product?.stock! ){
          addItem(product)
      } else{
        toast.error(`${product.name} is Limit`)
      }
    }
  
    const handleRemoveItem = (productId: string)=>{
      removeItem(productId)
      if(quantity <= 1){
         toast.error(`Remove ${products[0].name} from cart success`)
      }
    }
  

  console.log(products);

  useEffect(() => {
    getProductBySlug(slug);
  }, [slug]);

  useEffect(() => {
    if (products?.[0]?.images?.length) {
      setImageShow(urlFor(products[0].images[0]).url());
    }
  }, [products]);

  console.log(products[0]);

  const handleSetShowImage = (image: any) => {
    setImageShow(urlFor(image).url());
  };

  if (isLoading) {
    return <Loading title="Product" />;
  }

  if (!products?.length) {
    return <NoProductAvailable />;
  }

  return (
    <Container>
      <div className="flex items-center justify-center gap-2 transition-all duration-300 ease-in-out">
        <div className="flex flex-col sm:flex-row gap-4 items-start ">
          <div className="flex-1 ">
            {imageShow && (
              <Image
                src={imageShow}
                alt="Product detail image"
                width={400}
                height={400}
              />
            )}

            <div className="flex gap-2 flex-wrap">
              {products[0]?.images?.map((image: any) => (
                <Image
                  key={image._key}
                  src={urlFor(image).url()}
                  alt="Thumbnail"
                  width={100}
                  height={100}
                  onClick={() => handleSetShowImage(image)}
                  className="cursor-pointer border"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="font-bold text-xl">{products[0]?.name}</h1>
            <p className="text-sm text-gray-500">{products[0]?.description}</p>
            <Raiting />
            <span className="h-[0.5] bg-gray-300 my-4"></span>
            <div className="flex gap-4 font-bold">
              ${products[0]?.price!}
              <span className="text-gray-500 line-through">
                $
                {products[0]?.price! +
                  (products[0].price! * products[0].discount!) / 100}
              </span>
            </div>
            <span
              className={`${products[0]?.stock! > 0 ? "bg-blue-100 text-blue-400" : ""} font-bold text-sm px-4 rounded-md py-1  w-fit`}
            >
              {products[0]?.stock! > 0 ? "In Stock" : "Out of Stock"}
            </span>
            <span className="h-[0.5] bg-gray-300 my-4"></span>

            <div className="flex gap-2 w-[90%] items-center">
              {quantity > 0 ? (
                <div className="flex justify-between gap-2 px-2 w-full items-center">
                  <div className="flex justify-between gap-4 ">
                    <p className="text-gray-500">Currency</p>
                    <div className="flex gap-3 items-center">
                      <Minus
                        className="text-gray-500 cursor-pointer hover:bg-shop_light_green hover:text-white hoverEffect  border"
                        onClick={() => handleRemoveItem(products[0]._id)}
                      />
                      <span className="font-bold">{quantity}</span>
                      <Plus
                        className=" text-gray-500 cursor-pointer hover:bg-shop_light_green hover:text-white hoverEffect  border"
                        onClick={() => handleAddItem(products[0])}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 font-bold mb-1.5">
                    <p>Subtotal :</p>
                    <span>${(products[0].price! * quantity).toFixed(2)}</span>
                  </div>
                </div>
              ) : (
                <>
                  <AddToCartButton
                    product={products[0]}
                    className="w-full text-lg p-4"
                  />
                  <FavoriteClient product={products[0]} />
                </>
              )}
            </div>

            <div
              onClick={() => setShowMore(!showMore)}
              className="hover:underline mt-4 cursor-pointer flex w-full justify-between items-center"
            >
              <p className="font-bold">{products[0]?.name}</p>
              {showMore ? <ArrowUp /> : <ArrowDown />}
            </div>

            <SortDetails product={products[0]} showMore={showMore} />

            <span className="h-[0.5] bg-gray-300 my-4"></span>
            <MoreInformation />
            <span className="h-[0.5] bg-gray-300 my-4"></span>
            <Benefit />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-10">
        <div className="flex gap-2 p-1 rounded-md bg-gray-200 w-full  md:w-[60%]  items-center">
          {ModeProductInformation.map((item) => (
            <div
              key={item.title}
              onClick={() => handleChangeModeInformation(item.value)}
              className={`${modeInformation === item.value ? "bg-white border-2 border-black" : ""} rounded-md text-gray-700 text-sm p-2 w-full flex  justify-center items-center `}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="w-full  md:w-[60%]">
          {modeInformation == "description" ? (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
              <br />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </div>
          ) : modeInformation == "additional Information" ? (
            <div className="flex flex-col text-sm justify-start">
              <div className="flex  p-4">
                <h4 className="font-semibold flex-1">Weight</h4>
                <span className="text-gray-500 flex-1">190kg</span>
              </div>
              <div className="flex  p-4">
                <h4 className="font-semibold flex-1">Dimensions</h4>
                <span className="text-gray-500 flex-1">3x72x109 cm</span>
              </div>
            </div>
          ) : (
            <div>
              <ReviewsClient reviews={ReviewDemo} />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Page;
