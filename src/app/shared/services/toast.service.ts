import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly _toastr = inject(ToastrService);

  private readonly configToast = {
    tapToDismiss: true,
    closeButton: true,
    timeOut: 5000,
    progressBar: true,
  };

  error(message: string, title = 'Error'): void {
    this._toastr.error(message, title, this.configToast);
  }

  success(message: string, title = 'Correcto'): void {
    this._toastr.success(message, title, this.configToast);
  }

  warning(message: string, title = 'Advertencia'): void {
    this._toastr.warning(message, title, this.configToast);
  }

  info(message: string, title = 'Información'): void {
    this._toastr.info(message, title, this.configToast);
  }
}
