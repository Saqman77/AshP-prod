import React from "react";
import "./Wishlist.scss";
import { wishListContent } from "./wishListContent";
// import { wishlistCardContent } from "./wishlistCardContent";
import WishlistCard from "./WishlistCard/WishlistCard";
import Image from "next/image";
// import { WishListContent } from './types';

interface IWishListProps {
  headingMain: string;
  headingSub: string;
  headingHighlight: string;
  descriptionPara1: string;
  descriptionPara2: string;
  wishingForTitle: string;
  compatibleCardTitle: string;
  compatibleCardIcon: string;
  compatibleGenres: {
    fiction: { label: string; icon: { url: string }; genres: string[] };
    nonFiction: { label: string; icon: { url: string }; genres: string[] };
  };
  notWishingForTitle: string;
  incompatibleCardTitle: string;
  incompatibleGenresDescription: string;
  incompatibleCardIcon: string;
  incompatibleGenres: {
    label: string;
    icon: { url: string };
    genres: string[];
  };
}

const Wishlist = ({
  headingMain,
  headingSub,
  headingHighlight,
  descriptionPara1,
  descriptionPara2,
  wishingForTitle,
  compatibleCardTitle,
  compatibleCardIcon,
  compatibleGenres,
  notWishingForTitle,
  incompatibleCardTitle,
  incompatibleGenresDescription,
  incompatibleCardIcon,
  incompatibleGenres,
}: IWishListProps) => {
  return (
    <div className="wishlist-section">
      <div className="flower-wrapper">
        <Image src="/home/bgflower.svg" alt="flower" width={1342} height={1342} />
      </div>
      <div className="wishlist-header-row">
        <div className="wishlist-header-title">
          <h2>
            <span className="wishlist-main">
              {headingMain}
              <div className="wishlist-heading-sub">
                {headingSub}{" "}
                <span className="wishlist-highlight-wrapper">
                  <span className="wishlist-highlight-bg"></span>
                  <span className="wishlist-highlight">{headingHighlight}</span>
                </span>
              </div>
            </span>
          </h2>
        </div>
        <div className="wishlist-header-desc">
          <p className="desc-p">{descriptionPara1}</p>
          <p className="desc-p1">{descriptionPara2}</p>
        </div>
      </div>
      <div className="wishlist-cards">
        <h3 className="wishlist-section-title">{wishingForTitle}</h3>
        <WishlistCard
          type="compatible"
          label={compatibleCardTitle}
          labelIcon={compatibleCardIcon}
          labelColor={wishListContent.categories.wishingFor.labelColor}
          title={wishingForTitle}
          icon={compatibleCardIcon}
          fiction={compatibleGenres.fiction}
          nonfiction={compatibleGenres.nonFiction}
          fictionTitle={compatibleGenres.fiction.label}
          nonfictionTitle={compatibleGenres.nonFiction.label}
        />
        <h3 className="wishlist-section-title">{notWishingForTitle}</h3>
        <WishlistCard
          type="incompatible"
          label={incompatibleCardTitle}
          labelIcon={incompatibleCardIcon}
          labelColor={wishListContent.categories.notWishingFor.labelColor}
          title={notWishingForTitle}
          icon={incompatibleCardIcon}
          allGenres={incompatibleGenres}
          description={incompatibleGenresDescription}
          allGenresLabel={incompatibleGenres.label}
        />
      </div>
    </div>
  );
};

export default Wishlist;
