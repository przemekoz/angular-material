
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material/material.module';
import { MyNavComponent } from './my-nav.component';

describe('MyNavComponent', () => {
    let component: MyNavComponent;
    let fixture: ComponentFixture<MyNavComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MyNavComponent],
            imports: [MaterialModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(MyNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
