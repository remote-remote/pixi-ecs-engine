import { Component } from "../component/Component.js";
import { ComponentType, ComponentTypeMap } from "../component/ComponentType.js";

export class Entity {
  private components = new Map<ComponentType, Map<string, Component>>();

  constructor(public id: string) {}

  addComponent(component: Component) {
    if (!this.components.has(component.type)) {
      this.components.set(component.type, new Map<string, Component>());
    }

    const components = this.components.get(component.type) as Map<
      string,
      Component
    >;

    components.set(component.name || "default", component);

    return this;
  }

  getComponent<T extends keyof ComponentTypeMap>(
    type: T,
    name: string = "default",
  ): ComponentTypeMap[T] {
    const component = this.components.get(type)?.get(name);
    if (!component) {
      throw new Error(`Component not found: ${type} ${name}`);
    }
    return component as ComponentTypeMap[T];
  }

  getComponents<T extends keyof ComponentTypeMap>(
    type: T,
  ): ComponentTypeMap[T][] {
    const values = this.components.get(type)?.values();
    if (values) {
      return Array.from(values) as ComponentTypeMap[T][];
    }
    return [];
  }

  hasComponents(type: ComponentType): boolean {
    return this.components.has(type);
  }

  hasComponent(type: ComponentType, name: string = "default") {
    return this.components.get(type)?.has(name) || false;
  }
}
