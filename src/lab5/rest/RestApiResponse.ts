type Status = "success" | "failed";

export class RestApiResponse {
  protected status: Status;

  constructor(
    protected code: number,
    protected additional?: Record<string, any>
  ) {
    this.status = code === 200 ? "success" : "failed";
  }

  toString() {
    return JSON.stringify({
      code: this.code,
      status: this.status,
      ...this.additional,
    });
  }
}
