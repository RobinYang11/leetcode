import java.util.HashMap;

public class TwoSum {

  public static int[] twoSum(int nums[], int target) {

    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    int[] res = new int[2];
    for (int i = 0; i < nums.length; i++) {

      if (map.get(target - (target - nums[i])) != null) {
        res[0] = map.get(target - (target - nums[i]));
        res[1] = i;
        return res;
      }
      map.put(target-nums[i], i);
    }
    return res;
  }

  public static void main(String[] args) {
    System.out.println("hello world");
    int[] nums = { 1, 2, 4, 68, 9, 9, 10 };
    int res[] = twoSum(nums, 11);
    for (int i : res) {
      System.out.println(i);
    }
  }
}
