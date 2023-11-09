import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Button from 'flarum/common/components/Button';
import assistEntry from './assist/assist-entry';
import LinkButton from 'flarum/common/components/LinkButton';

app.initializers.add('hamcq/assisttool', () => {
  extend(HeaderSecondary.prototype, 'items', (items) => {
    assistEntry
    items.add('assist-tool',
      <div 
        class='Button-label' 
        style="color:var(--button-color);cursor: pointer;" 
        id='assist-open'
      >
        <i class="fas fa-wheelchair"></i>
        无障碍
      </div>
    , 20);
  });
});
