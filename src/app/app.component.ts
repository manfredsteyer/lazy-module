import { Component, createNgModuleRef, Injector, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'Hello World!';

  @ViewChild('outlet', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  Comp: Type<unknown> | undefined;

  constructor(private injector: Injector) {
  }

  async ngOnInit() {

    const mod = await import('./lazy/lazy.module');
    const modRef = createNgModuleRef(mod.LazyModule, this.injector);
    const Comp = modRef.instance.LazyComponent;

    // 1st option: displaying via ngComponentOutlet in template
    this.Comp = Comp;

    // 2nd option: using ViewContainerRef
    const compRef = this.viewContainer.createComponent(Comp);
  }
}
