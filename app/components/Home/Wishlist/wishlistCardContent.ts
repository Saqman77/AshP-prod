import { WishlistCardContent } from './types';

// interface IconConfig {
//     type: 'svg';
//     path: string;
// }

// interface CategorySection {
//     icon: IconConfig;
//     items: string[];
// }

export const wishlistCardContent: WishlistCardContent = {
    wishingFor: {
        fiction: {
            icon: {
                url: "/home/green-open.svg"
            },
            genres: [
                "Contemporary Literary Fiction",
                "Historical Fiction",
                "Science Fiction",
                "Fantasy",
                "Mystery & Thriller",
                "Romance",
                "Young Adult",
                "Graphic Novels",
                "Short Story Collections",
                "Literary Classics",
                "World Literature",
                "Speculative Fiction",
                "Magical Realism",
                "Dystopian Fiction",
                "Adventure Fiction",
                "Horror"
            ]
        },
        nonfiction: {
            icon: {
                url: "/home/green-open.svg"
            },
            genres: [
                "Biographies & Memoirs",
                "History",
                "Science & Technology",
                "Philosophy",
                "Psychology",
                "Self-Help"
            ]
        }
    },
    notWishingFor: {
        "All genres": {
            icon: {
                url: "/home/green-open.svg"
            },
            genres: [
                "Erotica",
                "Fan Fiction",
                "Religious Fiction",
                "Political Fiction",
                "Military Fiction",
            ]
        }
    }
}; 