import { Album } from "./pages/album/album";
import { Albums } from "./pages/albums/albums";

export const routes = [
  {
    path: "/",
    component: Albums,
  },
  {
    path: "/albums/",
    component: Albums,
  },
  {
    path: "/albums/:albumId/",
    component: Album,
  },
];
