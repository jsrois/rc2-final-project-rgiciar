package org.factoriaf5.backend;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;



@SpringBootTest
@AutoConfigureMockMvc
public class CatProfileTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testFindCatById() throws Exception {
        mockMvc.perform(get("/cat/1"))
                .andExpect(status().isOk());
    }

}