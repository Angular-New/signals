import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';

interface ICar {
  model: string;
  price: number;
}

@Component({
  selector: 'sng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private x = signal<number>(6);
  private y = signal<number>(4);

  public size = signal<number>(2);
  public sizes = signal<number[]>([2, 4, 6, 8]);

  private car = signal<ICar>({ model: 'bmw', price: 12000 });
  public cars = signal<ICar[]>([
    { model: 'bmw', price: 12000 },
    { model: 'fiat', price: 11000 },
  ]);

  public result = computed(() => this.x() + this.y());
  public changeYValue(): void {
    this.y.set(12);
  }
  public onSizeChanged(value: number): void {
    this.size.set(value);
  }

  private sizeChangedEffect = effect(() => console.info(this.size()));

  constructor() {
    console.log(this.size());
    this.size.update((size) => size * 4);
  }
}
