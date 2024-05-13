import { HttpClient, HttpContext, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, throwError } from 'rxjs';
import { Demande} from '../app/Models/Demande';
import { ApiConfiguration } from './ApiConfiguration';
import { StrictHttpResponse } from './StrictHttpResponse';
import { RequestBuilder } from './RequestBuilder';
import { DemandeDto } from '../app/Models/DemandeDto';
import { BaseService } from './BaseService';

@Injectable({
  providedIn: 'root'
})
export class DemandeService extends BaseService {


  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll2
   */
  static readonly FindAll2Path = '/api/demandes/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<DemandeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DemandeService.FindAll2Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DemandeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: {
    context?: HttpContext
  }
): Observable<Array<DemandeDto>> {

    return this.findAll2$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DemandeDto>>) => r.body as Array<DemandeDto>)
    );
  }

  /**
   * Path part for operation save2
   */
  static readonly Save2Path = '/api/demandes/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: {
    context?: HttpContext
    body: DemandeDto
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DemandeService.Save2Path, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: {
    context?: HttpContext
    body: DemandeDto
  }): Observable<number> {

    return this.save2$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findById2
   */
  static readonly FindById2Path = '/demades/{demade-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: {
    'demande-id': number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DemandeDto>> {

    const rb = new RequestBuilder(this.rootUrl, DemandeService.FindById2Path, 'get');
    if (params) {
      rb.path('demande-id', params['demande-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DemandeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: {
    'demande-id': number;
    context?: HttpContext
  }
): Observable<DemandeDto> {

    return this.findById2$Response(params).pipe(
      map((r: StrictHttpResponse<DemandeDto>) => r.body as DemandeDto)
    );
  }

  /**
   * Path part for operation delete2
   */
  static readonly Delete2Path = '/api/demandes/{demande-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */

 delete2$Response(params: {
    'demande-id': number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DemandeService.Delete2Path, 'delete');
    if (params) {
      rb.path('demande-id', params['demande-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body. */
   
  delete2(params: {
    'demande-id': number;
    context?: HttpContext
  }
): Observable<void> {

    return this.delete2$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  } 


 /**
   * Path part for operation findAllByUserId1
   */
 static readonly FindAllByUserId1Path = '/demande/list';
  //
  findAllByUserId1$Response(params: {
    'user-id': number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<DemandeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DemandeService.FindAllByUserId1Path, 'get');
    if (params) {
      rb.path('user-id', params['user-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DemandeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findAllByUserId1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUserId1(params: {
    'user-id': number;
    context?: HttpContext
  }
): Observable<Array<DemandeDto>> {

    return this.findAllByUserId1$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DemandeDto>>) => r.body as Array<DemandeDto>)
    );
  }


  

}