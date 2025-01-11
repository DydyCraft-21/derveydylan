import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes =
[
    {path: "", component: HomeComponent},

    {path: "aptitudes", component: AptitudesComponent},
    {path: "gallery", component: GalleryComponent}
];
