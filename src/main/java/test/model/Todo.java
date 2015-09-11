package test.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Artur Belski
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    private String id;
    private String name;
    private Boolean isCompleted;
}
