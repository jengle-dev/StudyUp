import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudyComponent } from './study/study.component';
import { QuizComponent } from './quiz/quiz.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'study', component: StudyComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'account', component: AccountComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];
