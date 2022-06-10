import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <div class="container">
      <div class="card container">
        <div class="event flex flex-align-top">
          <div class="date">
            <p>Saturday, September 4th @ 9:30 PM</p>
            <img src="/assets/date-picker.svg" alt="Calendar" />
          </div>
          <div class="description">
            <h1>Last Session</h1>
            <h2>Community App #3</h2>
            <h3>https://angularindarija.dev</h3>
            <p>
              In this session we're going to explain the application
              architecture and design.
            </p>
            <ul>
              <li>New Design</li>
              <li>Server Side Rendering</li>
              <li>Algolia Search</li>
              <li>Progressive WebApp</li>
              <li>Coming features</li>
              <li>Call for contributions</li>
            </ul>
            <p>We will pick and answer your questions on the fly.</p>
            <p>
              Hosted by
              <a href="//twitter.com/chihabotmani">Chihab Otmani</a> and
              <a href="//twitter.com/elfouih">Ilyass Elfouih</a>
            </p>
          </div>
        </div>
        <div class="border-top"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .event {
        justify-content: space-around;
      }

      .date {
        flex: 0.4;
        margin-top: 10px;
        padding: 10px;
        min-width: 250px;
        svg {
          width: 100%;
        }
        @media screen and (max-width: 1180px) {
          flex: 1;
          order: 1;
        }
      }

      .description {
        max-width: 600px;
        flex: 0.6;
        @media screen and (max-width: 1180px) {
          flex: 1;
        }
        padding: 10px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class EventComponent {}
