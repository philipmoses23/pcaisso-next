export interface DrawResult {
  id?: number;
  user_id: number;
  uuid: string;
  liked: boolean;
  status: string;
  code: string;
  text: string;
  timeTakenInSec: number;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  cost: {
    input_cost: number;
    output_cost: number;
    total_cost: number;
  };
}
