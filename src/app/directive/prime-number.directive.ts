import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appPrimeNumber]'
})
export class PrimeNumberDirective {

  @Input() set appPrimeNumberOf(nums: number[]) {
    this.viewContainer.clear()
    nums.forEach(num => {
      const prime = this.primeNumber(num)
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: num,
        prime: prime
      })
    })
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  private primeNumber(num: number): boolean {
    if(num <= 1) return false
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if(num % i == 0) return false
    }
    return true
  }
}
