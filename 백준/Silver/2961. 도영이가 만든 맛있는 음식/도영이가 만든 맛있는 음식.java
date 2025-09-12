import java.io.*;
import java.util.*;

public class Main {
    static int N;
    static int[] sour;  // 신맛
    static int[] bitter; // 쓴맛
    static int minMat = Integer.MAX_VALUE;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());

        sour = new int[N];
        bitter = new int[N];
        
        
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            sour[i] = Integer.parseInt(st.nextToken()); //신맛
            bitter[i] = Integer.parseInt(st.nextToken()); //쓴맛
        }

        subset(0, 1, 0, false);  // 초기 신맛곱 1, 쓴맛합 0, 재료 사용ㄴㄴ
        System.out.println(minMat);
    }

    static void subset(int idx, int sgop, int bSum, boolean used) {
        if (idx == N) {
            if (used) {
                minMat = Math.min(minMat, Math.abs(sgop - bSum));
            }
            return;
        }

        // 현재 재료 선택
        subset(idx + 1, sgop * sour[idx], bSum + bitter[idx], true);

        //현재 재료 미선택
        subset(idx + 1, sgop, bSum, used);
    }
}

