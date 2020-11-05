import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins, FilesystemDirectory, FilesystemEncoding} from '@capacitor/core';

const { Filesystem } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  imageUrl: string;
  filename = 'image.png';

  constructor() {
  }

  ngOnInit() {
      Filesystem.writeFile({
        path: this.filename,
        data: 'iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAABDElEQVR42u3SMQEAAAgDIE1u9FnA0xMy0JVMwbMWC7EQC7HEQizEQiwQC7EQC8RCLMQCsRALsUAsxEIsEAuxEAvEQizEArEQC7FALMRCLBALsRALxEIsxAKxEAuxQCzEQiwQC7EQC8RCLMQCsRALsUAsxEIsEAuxEAvEQizEArEQC7FALMRCLBALsRALxEIsxAKxEAuxQCzEQiwQC7EQC8RCLMQCsRALsRBLLMRCLMQCsRALsUAsxEIsEAuxEAvEQizEArEQC7FALMRCLBALsRALxEIsxAKxEAuxQCzEQiwQC7EQC8RCLMQCsRALsUAsxEIsEAuxEAvEQizEArEQC7FALMRCLBALsRALbgvEonXkWxsV6gAAAABJRU5ErkJggg==',
        directory: FilesystemDirectory.Data
      }).then((file) => {
          this.imageUrl = Capacitor.convertFileSrc(file.uri);
      })
  }
}
