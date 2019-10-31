import { Component } from '@angular/core';
import { BlogEntry } from '../blog-entry';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  entries: BlogEntry[] = [];

  constructor() {
    this.entries = [];
  }

  createBlogEntry(title: string, image: string, text: string) {
    const entry = new BlogEntry();
    entry.title = title;
    entry.image = image;
    entry.text = text;
    this.entries.push(entry);
  }
}
