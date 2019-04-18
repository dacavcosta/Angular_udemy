import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-content',
  template: `
  <div style="border: 2px solid black; padding: 1rem;">
    <h4>App Component</h4>
    <app-child-select>
      <section>Section Content</section>
      <div class="class-select">
        div with .class-select
      </div>
      <footer>Footer Content</footer>
      <header>Header Content</header>
    </app-child-select>
  </div>
  `
})
export class ExemploNgContentComponent {
}
