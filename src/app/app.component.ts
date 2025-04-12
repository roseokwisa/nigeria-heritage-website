import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NigeriaHeritageWebsite';
  activeTab: string = 'home'; // Default tab

  constructor() { }

  ngOnInit(): void {
    // Check if there is a saved tab in localStorage
    const savedTab = localStorage.getItem('activeTab');
    
    if (savedTab) {
      this.activeTab = savedTab;  // Load last active tab
    } else {
      this.activeTab = 'home'; // Default to Home if no saved tab
    }}

    setActiveTab(tabName: string): void {
      this.activeTab = tabName;  // Set active tab
      localStorage.setItem('activeTab', tabName); // Save tab selection
    }
}
