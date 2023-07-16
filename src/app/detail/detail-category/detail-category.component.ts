import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateService } from 'src/app/create/create.service';
import { Categories, Posts } from 'src/app/interfaces';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent {
  categoriesList: Categories[] = []
  categoryListName = "categoriesList"
  postsList: Posts[] = []
  postListName = "postsList"

  category: Categories ={
    category_id: 0,
    name: "",
    creation_date: "",
  };

  categoriesPosts: Posts[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private createService: CreateService
  ) {
    this.categoriesList = this.createService.getDataList(this.categoriesList, this.categoryListName);
    this.postsList = this.createService.getDataList(this.postsList, this.postListName);
  }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.categoriesList = this.createService.getDataList(this.categoriesList, this.categoryListName);
      const id = params['id'];
      this.category = this.categoriesList.find(category => category.category_id === Number(id))!;
      for(let post of this.postsList) {
        if(post.categoryId === this.category.category_id) {
          this.categoriesPosts.push(post);
        }
    }
  })
  }
}
