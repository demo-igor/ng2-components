/**
 * Created by igordemo on 10/20/17.
 */
import {
  ComponentFactoryResolver,
  ViewContainerRef,
  ReflectiveInjector,
  Injectable,
  ComponentRef,
  Injector
} from '@angular/core';


@Injectable()
export class DynamicComponentService {
  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public create<T>(component: {new (...args: any[]): T;}, data?: any): ComponentRef<T> {
    const injector = ReflectiveInjector.fromResolvedProviders([], this.injector);
    const factory  = this.componentFactoryResolver.resolveComponentFactory(component);
    const newComponent = factory.create(injector);

    this.assignData(newComponent, data);

    return newComponent
  }

  public render<T>(viewContainer: ViewContainerRef, component: {new (...args: any[]): T;}, data?: any): ComponentRef<T> {
    const injector = ReflectiveInjector.fromResolvedProviders([], viewContainer.parentInjector);
    const factory  = this.componentFactoryResolver.resolveComponentFactory(component);
    const newComponent = factory.create(injector);

    this.assignData(newComponent, data);

    viewContainer.insert(newComponent.hostView);

    return newComponent
  }

  public assignData(componentRef: ComponentRef<any>, data?: any) {
    if (data) {
      for (let property in componentRef.instance) {
        if (data[property]) {
          componentRef.instance[property] = data[property];
        }
      }
    }
  }
}
