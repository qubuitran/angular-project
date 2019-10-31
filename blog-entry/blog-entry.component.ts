import {Component, Input} from '@angular/core';
import {BlogEntry} from '../blog-entry';

@Component({
  selector: 'app-blog-entry',
  templateUrl: 'blog-entry.component.html'
})
export class BlogEntryComponent {
  @Input() entry: BlogEntry;
}
