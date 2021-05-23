import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyPetService } from '../my-pet.service';
import { PetDTO } from 'src/model/PetDTO';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  file: string | ArrayBuffer;

  newPet =  new FormGroup({
    pet_name: new FormControl(null, Validators.required),
    pet_age: new FormControl(null, Validators.required),
    pet_species: new FormControl(null, Validators.required),
    pet_breed: new FormControl(null, Validators.required),
    pet_description: new FormControl(null, Validators.required),
    pet_type: new FormControl(null, Validators.required),
    pet_image: new FormControl(null)
    // pet_image: new FormControl(null, [Validators.required, requiredFileType('png')])
  });

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    if(file){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          // console.log(reader.result);
          console.log(reader.result.slice(23));
          this.file = reader.result.slice(23);
      };
    }
  }

  constructor(private location: Location,private formBuilder: FormBuilder, private myPetService: MyPetService) { }

  ngOnInit(): void {
  }
  
  goBack() {
    this.location.back();
  }

  onSubmit() {
    // let petDTO = this.toFormData(this.newPet.value);
    const formValue = this.newPet.value;
    const petDTO: PetDTO = {
      pet_name: formValue.pet_name,
      pet_age: formValue.pet_age,
      pet_species: formValue.pet_species,
      pet_breed: formValue.pet_breed,
      pet_description: formValue.pet_description,
      pet_type: formValue.pet_type,
      pet_image: this.file
    };
    this.myPetService.addPet(petDTO).subscribe(event => {
      console.log(event);
    });
  }

  // toFormData<T>( formValue: T ) {
  //   const formData = new FormData();
  //   for ( const key of Object.keys(formValue) ) {
  //     const value = formValue[key];
  //     // console.log(value);
  //     formData.append(key, value);
  //   }
  //   return formData;
  // }

  clearForm() {
  //   for ( const key of Object.keys(this.newPet.value) ) {
  //     this.newPet.value[key] = '';
  //   }
  }

}
