import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());

        int ans = -1;                       // 기본값: 불가능하면 -1
        for (int i = n / 5; i >= 0; i--) {  // 5kg 봉지를 최대한 많이 쓰는 것부터 확인
            int rem = n - 5 * i;            // 남은 무게
            if (rem % 3 == 0) {             // 3kg으로 나눠떨어지면
                ans = i + rem / 3;          // 5kg i개 + 3kg (rem/3)개
                break;                      // 그리디 특성상 첫 해가 최소 봉지 수
            }
        }
        System.out.println(ans);
    }
}
