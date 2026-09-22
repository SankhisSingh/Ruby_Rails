| Code    | Message                         | Symbol                             |
| ------- | ------------------------------- | ------                             |
|         |                                 |                                    |
| __1xx__ | __Informational__               |                                    |
| 100     | Continue                        | `:continue`                        |
| 101     | Switching Protocols             | `:switching_protocols`             |
| 102     | Processing                      | `:processing`                      |
|         |                                 |                                    |
| __2xx__ | __Success__                     |                                    |
| 200     | OK                              | `:ok`                              |
| 201     | Created                         | `:created`                         |
| 202     | Accepted                        | `:accepted`                        |
| 203     | Non-Authoritative Information   | `:non_authoritative_information`   |
| 204     | No Content                      | `:no_content`                      |
| 205     | Reset Content                   | `:reset_content`                   |
| 206     | Partial Content                 | `:partial_content`                 |
| 207     | Multi-Status                    | `:multi_status`                    |
| 208     | Already Reported                | `:already_reported`                |
| 226     | IM Used                         | `:im_used`                         |
|         |                                 |                                    |
| __3xx__ | __Redirection__                 |                                    |
| 300     | Multiple Choices                | `:multiple_choices`                |
| 301     | Moved Permanently               | `:moved_permanently`               |
| 302     | Found                           | `:found`                           |
| 303     | See Other                       | `:see_other`                       |
| 304     | Not Modified                    | `:not_modified`                    |
| 305     | Use Proxy                       | `:use_proxy`                       |
| 306     | Reserved                        | `:reserved`                        |
| 307     | Temporary Redirect              | `:temporary_redirect`              |
| 308     | Permanent Redirect              | `:permanent_redirect`              |
|         |                                 |                                    |
| __4xx__ | __Client Error__                |                                    |
| 400     | Bad Request                     | `:bad_request`                     |
| 401     | Unauthorized                    | `:unauthorized`                    |
| 402     | Payment Required                | `:payment_required`                |
| 403     | Forbidden                       | `:forbidden`                       |
| 404     | Not Found                       | `:not_found`                       |
| 405     | Method Not Allowed              | `:method_not_allowed`              |
| 406     | Not Acceptable                  | `:not_acceptable`                  |
| 407     | Proxy Authentication Required   | `:proxy_authentication_required`   |
| 408     | Request Timeout                 | `:request_timeout`                 |
| 409     | Conflict                        | `:conflict`                        |
| 410     | Gone                            | `:gone`                            |
| 411     | Length Required                 | `:length_required`                 |
| 412     | Precondition Failed             | `:precondition_failed`             |
| 413     | Request Entity Too Large        | `:request_entity_too_large`        |
| 414     | Request-URI Too Long            | `:request_uri_too_long`            |
| 415     | Unsupported Media Type          | `:unsupported_media_type`          |
| 416     | Requested Range Not Satisfiable | `:requested_range_not_satisfiable` |
| 417     | Expectation Failed              | `:expectation_failed`              |
| 418     | I'm a teapot                    | Not implemented                    |
| 422     | Unprocessable Entity            | `:unprocessable_entity`            |
| 423     | Locked                          | `:locked`                          |
| 424     | Failed Dependency               | `:failed_dependency`               |
| 425     | Reserved for WebDAV advanced collections expired proposal | `:reserved_for_webdav_advanced_collections_expired_proposal` |
| 426     | Upgrade Required                | `:upgrade_required`                |
| 427     | Unassigned                      | none                               |
| 428     | Precondition Required           | `:precondition_required`           |
| 429     | Too Many Requests               | `:too_many_requests`               |
| 430     | Unassigned                      | none                               |
| 431     | Request Header Fields Too Large | `:request_header_fields_too_large` |
|         |                                 |                                    |
| __5xx__ | __Server Error__                |                                    |
| 500     | Internal Server Error           | `:internal_server_error`           |
| 501     | Not Implemented                 | `:not_implemented`                 |
| 502     | Bad Gateway                     | `:bad_gateway`                     |
| 503     | Service Unavailable             | `:service_unavailable`             |
| 504     | Gateway Timeout                 | `:gateway_timeout`                 |
| 505     | HTTP Version Not Supported      | `:http_version_not_supported`      |
| 506     | Variant Also Negotiates (Experimental) | `:"variant_also_negotiates_(experimental)"` |
| 507     | Insufficient Storage            | `:insufficient_storage`            |
| 508     | Loop Detected                   | `:loop_detected`                   |
| 509     | Unassigned                      | `:unassigned`                      |
| 510     | Not Extended                    | `:not_extended`                    |
| 511     | Network Authentication Required | `:network_authentication_required` |

> This list was assembled using Rack utilities:
> Code/Description: `Rack::Utils::HTTP_STATUS_CODES`
> Symbol/Code: `Rack::Utils::SYMBOL_TO_STATUS_CODE`
