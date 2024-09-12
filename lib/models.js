module.exports = {
  "models": {
    "public": {
      "schema_defs": {
        "properties": {
          "schema_name": "public",
          "table_name": "schema_defs",
          "columns": {
            "last_sync": {
              "id": 7,
              "type": "integer",
              "default": "0",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "db_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.databases.db_id",
              "unique": true
            },
            "custom_columns": {
              "id": 2,
              "type": "jsonb[]",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "def": {
              "id": 8,
              "type": "json",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "enum_tables": {
              "id": 6,
              "type": "jsonb",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "sync_error": {
              "id": 5,
              "type": "jsonb",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_sync_attempt_time": {
              "id": 4,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_sync_success_time": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 19330923,
          "primary": [],
          "unique": [
            "db_id"
          ],
          "relations": {
            "db_id": "public.databases.db_id"
          },
          "referencedBy": {},
          "uindex": {
            "schema_defs_db_id_key": [
              "db_id"
            ]
          },
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "db_id",
            "2": "custom_columns",
            "3": "last_sync_success_time",
            "4": "last_sync_attempt_time",
            "5": "sync_error",
            "6": "enum_tables",
            "7": "last_sync",
            "8": "def"
          },
          "rels": {
            "public.schema_defs.db_id-public.databases.db_id": "M-1"
          },
          "rels_new": {
            "public.schema_defs.db_id-public.databases.db_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "users": {
        "properties": {
          "schema_name": "public",
          "table_name": "users",
          "columns": {
            "pass": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "nick": {
              "id": 1,
              "type": "citext",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 19167879,
          "primary": [
            "nick"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "nick",
            "2": "pass"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test_table15": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_table15",
          "columns": {
            "display_type_id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 2,
              "type": "integer",
              "default": "(date_part('epoch'::text, now()))::integer",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 19081600,
          "primary": [
            "display_type_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "display_type_id",
            "2": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test_table14": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_table14",
          "columns": {
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(date_part('epoch'::text, now()))::integer",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "display_type_id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 19081588,
          "primary": [
            "display_type_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "display_type_id",
            "2": "name",
            "3": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test_table12": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_table12",
          "columns": {
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(date_part('epoch'::text, now()))::integer",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "display_type_id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 19081577,
          "primary": [
            "display_type_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "display_type_id",
            "2": "name",
            "3": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test_table4": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_table4",
          "columns": {
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "display_type_id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(date_part('epoch'::text, now()))::integer",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 19081566,
          "primary": [
            "display_type_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "display_type_id",
            "2": "name",
            "3": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "schema_defs_temp3": {
        "properties": {
          "schema_name": "public",
          "table_name": "schema_defs_temp3",
          "columns": {
            "db_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.databases.db_id",
              "unique": false
            },
            "last_sync": {
              "id": 4,
              "type": "integer",
              "default": "0",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "def": {
              "id": 5,
              "type": "json",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "enum_tables": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "custom_columns": {
              "id": 2,
              "type": "jsonb[]",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 19077558,
          "primary": [],
          "unique": [
            "db_id"
          ],
          "relations": {
            "db_id": "public.databases.db_id"
          },
          "referencedBy": {},
          "uindex": {
            "schema_defs_temp3_db_id_key": [
              "db_id"
            ]
          },
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "db_id",
            "2": "custom_columns",
            "3": "enum_tables",
            "4": "last_sync",
            "5": "def"
          },
          "rels": {
            "public.schema_defs_temp3.db_id-public.databases.db_id": "M-1"
          },
          "rels_new": {
            "public.schema_defs_temp3.db_id-public.databases.db_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "schema_defs_temp": {
        "properties": {
          "schema_name": "public",
          "table_name": "schema_defs_temp",
          "columns": {
            "db_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.databases.db_id",
              "unique": true
            },
            "custom_columns": {
              "id": 2,
              "type": "jsonb[]",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "enum_tables": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_sync": {
              "id": 4,
              "type": "integer",
              "default": "0",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "def": {
              "id": 5,
              "type": "json",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 19077542,
          "primary": [],
          "unique": [
            "db_id"
          ],
          "relations": {
            "db_id": "public.databases.db_id"
          },
          "referencedBy": {},
          "uindex": {
            "schema_defs_temp_db_id_key": [
              "db_id"
            ]
          },
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "db_id",
            "2": "custom_columns",
            "3": "enum_tables",
            "4": "last_sync",
            "5": "def"
          },
          "rels": {
            "public.schema_defs_temp.db_id-public.databases.db_id": "M-1"
          },
          "rels_new": {
            "public.schema_defs_temp.db_id-public.databases.db_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "sample_unique_key_table": {
        "properties": {
          "schema_name": "public",
          "table_name": "sample_unique_key_table",
          "columns": {
            "age": {
              "id": 9,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('sample_unique_key_table_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 8,
              "type": "text",
              "default": "''::text",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "col2": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "col1": {
              "id": 2,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "col6": {
              "id": 7,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "col5": {
              "id": 6,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "col4": {
              "id": 5,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "roll_no": {
              "id": 10,
              "type": "text",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "col9": {
              "id": 13,
              "type": "integer",
              "default": "9",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "col7": {
              "id": 12,
              "type": "integer",
              "default": "10",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "test_col": {
              "id": 11,
              "type": "text",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "col3": {
              "id": 4,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18975222,
          "primary": [
            "id"
          ],
          "unique": [
            "age",
            "name",
            "col2",
            "col1",
            "col6",
            "col5",
            "col4",
            "roll_no"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "sample_unique_key_table_col1_col2_name_age_key": [
              "age",
              "name",
              "col2",
              "col1"
            ],
            "sample_unique_key_table_col4_col5_col6_key": [
              "col6",
              "col5",
              "col4"
            ],
            "name_unq": [
              "roll_no"
            ]
          },
          "notnulls": [],
          "serials": [
            "id"
          ],
          "idToName": {
            "1": "id",
            "2": "col1",
            "3": "col2",
            "4": "col3",
            "5": "col4",
            "6": "col5",
            "7": "col6",
            "8": "name",
            "9": "age",
            "10": "roll_no",
            "11": "test_col",
            "12": "col7",
            "13": "col9"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test5": {
        "properties": {
          "schema_name": "public",
          "table_name": "test5",
          "columns": {
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(date_part('epoch'::text, now()))::integer",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "rawtab_id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "rawtabs": {
              "id": 2,
              "type": "jsonb",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "tab_order": {
              "id": 3,
              "type": "text[]",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18934282,
          "primary": [
            "rawtab_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "rawtab_id",
            "2": "rawtabs",
            "3": "tab_order",
            "4": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test3": {
        "properties": {
          "schema_name": "public",
          "table_name": "test3",
          "columns": {
            "c1": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18926395,
          "primary": [],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "c1"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test1": {
        "properties": {
          "schema_name": "public",
          "table_name": "test1",
          "columns": {
            "c1": {
              "id": 1,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c2": {
              "id": 2,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c3": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18925952,
          "primary": [],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "c1",
            "2": "c2",
            "3": "c3"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "sample_table": {
        "properties": {
          "schema_name": "public",
          "table_name": "sample_table",
          "columns": {
            "db_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.databases.db_id",
              "unique": false
            },
            "enum_tables": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "required": {
              "id": 6,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_sync": {
              "id": 4,
              "type": "integer",
              "default": "0",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "custom_columns": {
              "id": 2,
              "type": "jsonb[]",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "def": {
              "id": 5,
              "type": "json",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18854581,
          "primary": [],
          "unique": [
            "db_id"
          ],
          "relations": {
            "db_id": "public.databases.db_id"
          },
          "referencedBy": {},
          "uindex": {
            "sample_table_db_id_key": [
              "db_id"
            ]
          },
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "db_id",
            "2": "custom_columns",
            "3": "enum_tables",
            "4": "last_sync",
            "5": "def",
            "6": "required"
          },
          "rels": {
            "public.sample_table.db_id-public.databases.db_id": "M-1"
          },
          "rels_new": {
            "public.sample_table.db_id-public.databases.db_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "databases": {
        "properties": {
          "schema_name": "public",
          "table_name": "databases",
          "columns": {
            "db_id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 2,
              "type": "integer",
              "default": "(date_part('epoch'::text, now()))::integer",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18854571,
          "primary": [
            "db_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {
            "db_id": [
              "public.schema_defs.db_id",
              "public.schema_defs_temp3.db_id",
              "public.schema_defs_temp.db_id",
              "public.sample_table.db_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "db_id",
            "2": "created_at"
          },
          "rels": {
            "public.databases.db_id-public.schema_defs.db_id": "1-M",
            "public.databases.db_id-public.schema_defs_temp3.db_id": "1-M",
            "public.databases.db_id-public.schema_defs_temp.db_id": "1-M",
            "public.databases.db_id-public.sample_table.db_id": "1-M"
          },
          "rels_new": {
            "public.databases.db_id-public.schema_defs.db_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.databases.db_id-public.schema_defs_temp3.db_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.databases.db_id-public.schema_defs_temp.db_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.databases.db_id-public.sample_table.db_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "test_company_4": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_company_4",
          "columns": {
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "address": {
              "id": 4,
              "type": "character(50)",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "salary": {
              "id": 5,
              "type": "real",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "integer",
              "default": "2",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "age": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18854411,
          "primary": [],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "age",
            "4": "address",
            "5": "salary"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test_company_new": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_company_new",
          "columns": {
            "address": {
              "id": 4,
              "type": "character(50)",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "age": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('test_company_new_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "salary": {
              "id": 5,
              "type": "real",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18854308,
          "primary": [
            "id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [
            "id"
          ],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "age",
            "4": "address",
            "5": "salary"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test_company_3": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_company_3",
          "columns": {
            "address": {
              "id": 4,
              "type": "character(50)",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "age": {
              "id": 3,
              "type": "integer",
              "default": "23",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "salary": {
              "id": 5,
              "type": "real",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('test_company_3_id_seq'::regclass)",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18854252,
          "primary": [],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [
            "id"
          ],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "age",
            "4": "address",
            "5": "salary"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test_company": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_company",
          "columns": {
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('test_company_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "salary": {
              "id": 5,
              "type": "real",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "address": {
              "id": 4,
              "type": "character(50)",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "age": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18854195,
          "primary": [
            "id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [
            "id"
          ],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "age",
            "4": "address",
            "5": "salary"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "test_contact": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_contact",
          "columns": {
            "how_you_know_us": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "question": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "email": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "company": {
              "id": 6,
              "type": "text",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 7,
              "type": "integer",
              "default": "(date_part('epoch'::text, now()))::integer",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "column_id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18854136,
          "primary": [
            "column_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "column_id",
            "2": "name",
            "3": "email",
            "4": "question",
            "5": "how_you_know_us",
            "6": "company",
            "7": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "table3": {
        "properties": {
          "schema_name": "public",
          "table_name": "table3",
          "columns": {
            "c2": {
              "id": 2,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c1": {
              "id": 1,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c4": {
              "id": 4,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c3": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c5": {
              "id": 5,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18853887,
          "primary": [
            "c1"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {
            "c1": [
              "public.table2.c3"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "c1",
            "2": "c2",
            "3": "c3",
            "4": "c4",
            "5": "c5"
          },
          "rels": {
            "public.table3.c1-public.table2.c3": "1-M"
          },
          "rels_new": {
            "public.table3.c1-public.table2.c3": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "table2": {
        "properties": {
          "schema_name": "public",
          "table_name": "table2",
          "columns": {
            "c3": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": true,
              "fk_col": "public.table3.c1",
              "unique": false
            },
            "c1": {
              "id": 1,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c4": {
              "id": 4,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c5": {
              "id": 5,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": true,
              "fk_col": "public.table1.c3",
              "unique": false
            },
            "c2": {
              "id": 2,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": true,
              "fk_col": "public.table1.c1",
              "unique": false
            }
          },
          "id": 18853882,
          "primary": [
            "c1"
          ],
          "unique": [],
          "relations": {
            "c3": "public.table3.c1",
            "c5": "public.table1.c3",
            "c2": "public.table1.c1"
          },
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "c1",
            "2": "c2",
            "3": "c3",
            "4": "c4",
            "5": "c5"
          },
          "rels": {
            "public.table2.c3-public.table3.c1": "M-1",
            "public.table2.c5-public.table1.c3": "M-1",
            "public.table2.c2-public.table1.c1": "M-1"
          },
          "rels_new": {
            "public.table2.c3-public.table3.c1": {
              "type": "M-1",
              "direct": "out"
            },
            "public.table2.c5-public.table1.c3": {
              "type": "M-1",
              "direct": "out"
            },
            "public.table2.c2-public.table1.c1": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "table1": {
        "properties": {
          "schema_name": "public",
          "table_name": "table1",
          "columns": {
            "c2": {
              "id": 2,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c3": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "c1": {
              "id": 1,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c5": {
              "id": 5,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "c4": {
              "id": 4,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18853877,
          "primary": [
            "c1"
          ],
          "unique": [
            "c3"
          ],
          "relations": {},
          "referencedBy": {
            "c3": [
              "public.table2.c5"
            ],
            "c1": [
              "public.table2.c2"
            ]
          },
          "uindex": {
            "constraintname_is_uniqe": [
              "c3"
            ]
          },
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "c1",
            "2": "c2",
            "3": "c3",
            "4": "c4",
            "5": "c5"
          },
          "rels": {
            "public.table1.c3-public.table2.c5": "1-M",
            "public.table1.c1-public.table2.c2": "1-M"
          },
          "rels_new": {
            "public.table1.c3-public.table2.c5": {
              "type": "1-M",
              "direct": "in"
            },
            "public.table1.c1-public.table2.c2": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "test_tb_fk": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_tb_fk",
          "columns": {
            "job_name": {
              "id": 2,
              "type": "character(50)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "emp_id": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": true,
              "fk_col": "public.test_tb_pk.emp_id",
              "unique": false
            },
            "job_id": {
              "id": 1,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841829,
          "primary": [
            "job_id"
          ],
          "unique": [],
          "relations": {
            "emp_id": "public.test_tb_pk.emp_id"
          },
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "job_id",
            "2": "job_name",
            "3": "emp_id"
          },
          "rels": {
            "public.test_tb_fk.emp_id-public.test_tb_pk.emp_id": "M-1"
          },
          "rels_new": {
            "public.test_tb_fk.emp_id-public.test_tb_pk.emp_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "test_tb_pk": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_tb_pk",
          "columns": {
            "name": {
              "id": 2,
              "type": "character(50)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "emp_id": {
              "id": 1,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "age": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841824,
          "primary": [
            "emp_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {
            "emp_id": [
              "public.test_tb_fk.emp_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "emp_id",
            "2": "name",
            "3": "age"
          },
          "rels": {
            "public.test_tb_pk.emp_id-public.test_tb_fk.emp_id": "1-M"
          },
          "rels_new": {
            "public.test_tb_pk.emp_id-public.test_tb_fk.emp_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "test_table": {
        "properties": {
          "schema_name": "public",
          "table_name": "test_table",
          "columns": {
            "dept": {
              "id": 2,
              "type": "character(50)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "emp_id": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841728,
          "primary": [
            "id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "dept",
            "3": "emp_id"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "store": {
        "properties": {
          "schema_name": "public",
          "table_name": "store",
          "columns": {
            "address_id": {
              "id": 3,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.address.address_id",
              "unique": false
            },
            "last_update": {
              "id": 4,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "manager_staff_id": {
              "id": 2,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.staff.staff_id",
              "unique": false
            },
            "store_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('store_store_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841555,
          "primary": [
            "store_id"
          ],
          "unique": [],
          "relations": {
            "address_id": "public.address.address_id",
            "manager_staff_id": "public.staff.staff_id"
          },
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [
            "store_id"
          ],
          "idToName": {
            "1": "store_id",
            "2": "manager_staff_id",
            "3": "address_id",
            "4": "last_update"
          },
          "rels": {
            "public.store.address_id-public.address.address_id": "M-1",
            "public.store.manager_staff_id-public.staff.staff_id": "M-1"
          },
          "rels_new": {
            "public.store.address_id-public.address.address_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.store.manager_staff_id-public.staff.staff_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "staff": {
        "properties": {
          "schema_name": "public",
          "table_name": "staff",
          "columns": {
            "store_id": {
              "id": 6,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_name": {
              "id": 3,
              "type": "character varying(45)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "first_name": {
              "id": 2,
              "type": "character varying(45)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "address_id": {
              "id": 4,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.address.address_id",
              "unique": false
            },
            "picture": {
              "id": 11,
              "type": "bytea",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "active": {
              "id": 7,
              "type": "boolean",
              "default": "true",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "staff_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('staff_staff_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "username": {
              "id": 8,
              "type": "character varying(16)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "password": {
              "id": 9,
              "type": "character varying(40)",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 10,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "email": {
              "id": 5,
              "type": "character varying(50)",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841544,
          "primary": [
            "staff_id"
          ],
          "unique": [],
          "relations": {
            "address_id": "public.address.address_id"
          },
          "referencedBy": {
            "staff_id": [
              "public.store.manager_staff_id",
              "public.rental.staff_id",
              "public.payment.staff_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "staff_id"
          ],
          "idToName": {
            "1": "staff_id",
            "2": "first_name",
            "3": "last_name",
            "4": "address_id",
            "5": "email",
            "6": "store_id",
            "7": "active",
            "8": "username",
            "9": "password",
            "10": "last_update",
            "11": "picture"
          },
          "rels": {
            "public.staff.staff_id-public.store.manager_staff_id": "1-M",
            "public.staff.address_id-public.address.address_id": "M-1",
            "public.staff.staff_id-public.rental.staff_id": "1-M",
            "public.staff.staff_id-public.payment.staff_id": "1-M"
          },
          "rels_new": {
            "public.staff.staff_id-public.store.manager_staff_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.staff.address_id-public.address.address_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.staff.staff_id-public.rental.staff_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.staff.staff_id-public.payment.staff_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "rental": {
        "properties": {
          "schema_name": "public",
          "table_name": "rental",
          "columns": {
            "rental_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('rental_rental_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 7,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "customer_id": {
              "id": 4,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.customer.customer_id",
              "unique": false
            },
            "return_date": {
              "id": 5,
              "type": "timestamp without time zone",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "rental_date": {
              "id": 2,
              "type": "timestamp without time zone",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "staff_id": {
              "id": 6,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.staff.staff_id",
              "unique": false
            },
            "inventory_id": {
              "id": 3,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.inventory.inventory_id",
              "unique": false
            }
          },
          "id": 18841532,
          "primary": [
            "rental_id"
          ],
          "unique": [],
          "relations": {
            "customer_id": "public.customer.customer_id",
            "staff_id": "public.staff.staff_id",
            "inventory_id": "public.inventory.inventory_id"
          },
          "referencedBy": {
            "rental_id": [
              "public.payment.rental_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "rental_id"
          ],
          "idToName": {
            "1": "rental_id",
            "2": "rental_date",
            "3": "inventory_id",
            "4": "customer_id",
            "5": "return_date",
            "6": "staff_id",
            "7": "last_update"
          },
          "rels": {
            "public.rental.customer_id-public.customer.customer_id": "M-1",
            "public.rental.staff_id-public.staff.staff_id": "M-1",
            "public.rental.inventory_id-public.inventory.inventory_id": "M-1",
            "public.rental.rental_id-public.payment.rental_id": "1-M"
          },
          "rels_new": {
            "public.rental.customer_id-public.customer.customer_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.rental.staff_id-public.staff.staff_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.rental.inventory_id-public.inventory.inventory_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.rental.rental_id-public.payment.rental_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "payment": {
        "properties": {
          "schema_name": "public",
          "table_name": "payment",
          "columns": {
            "payment_date": {
              "id": 6,
              "type": "timestamp without time zone",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "amount": {
              "id": 5,
              "type": "numeric(5,2)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "payment_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('payment_payment_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "staff_id": {
              "id": 3,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.staff.staff_id",
              "unique": false
            },
            "rental_id": {
              "id": 4,
              "type": "integer",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.rental.rental_id",
              "unique": false
            },
            "customer_id": {
              "id": 2,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.customer.customer_id",
              "unique": false
            }
          },
          "id": 18841526,
          "primary": [
            "payment_id"
          ],
          "unique": [],
          "relations": {
            "staff_id": "public.staff.staff_id",
            "rental_id": "public.rental.rental_id",
            "customer_id": "public.customer.customer_id"
          },
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [
            "payment_id"
          ],
          "idToName": {
            "1": "payment_id",
            "2": "customer_id",
            "3": "staff_id",
            "4": "rental_id",
            "5": "amount",
            "6": "payment_date"
          },
          "rels": {
            "public.payment.staff_id-public.staff.staff_id": "M-1",
            "public.payment.rental_id-public.rental.rental_id": "M-1",
            "public.payment.customer_id-public.customer.customer_id": "M-1"
          },
          "rels_new": {
            "public.payment.staff_id-public.staff.staff_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.payment.rental_id-public.rental.rental_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.payment.customer_id-public.customer.customer_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "language": {
        "properties": {
          "schema_name": "public",
          "table_name": "language",
          "columns": {
            "language_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('language_language_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 3,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "character(20)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841514,
          "primary": [
            "language_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {
            "language_id": [
              "public.film.language_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "language_id"
          ],
          "idToName": {
            "1": "language_id",
            "2": "name",
            "3": "last_update"
          },
          "rels": {
            "public.language.language_id-public.film.language_id": "1-M"
          },
          "rels_new": {
            "public.language.language_id-public.film.language_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "inventory": {
        "properties": {
          "schema_name": "public",
          "table_name": "inventory",
          "columns": {
            "film_id": {
              "id": 2,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.film.film_id",
              "unique": false
            },
            "inventory_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('inventory_inventory_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 4,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "store_id": {
              "id": 3,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841507,
          "primary": [
            "inventory_id"
          ],
          "unique": [],
          "relations": {
            "film_id": "public.film.film_id"
          },
          "referencedBy": {
            "inventory_id": [
              "public.rental.inventory_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "inventory_id"
          ],
          "idToName": {
            "1": "inventory_id",
            "2": "film_id",
            "3": "store_id",
            "4": "last_update"
          },
          "rels": {
            "public.inventory.inventory_id-public.rental.inventory_id": "1-M",
            "public.inventory.film_id-public.film.film_id": "M-1"
          },
          "rels_new": {
            "public.inventory.inventory_id-public.rental.inventory_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.inventory.film_id-public.film.film_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "country": {
        "properties": {
          "schema_name": "public",
          "table_name": "country",
          "columns": {
            "country_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('country_country_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "country": {
              "id": 2,
              "type": "character varying(50)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 3,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841490,
          "primary": [
            "country_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {
            "country_id": [
              "public.city.country_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "country_id"
          ],
          "idToName": {
            "1": "country_id",
            "2": "country",
            "3": "last_update"
          },
          "rels": {
            "public.country.country_id-public.city.country_id": "1-M"
          },
          "rels_new": {
            "public.country.country_id-public.city.country_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "city": {
        "properties": {
          "schema_name": "public",
          "table_name": "city",
          "columns": {
            "country_id": {
              "id": 3,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.country.country_id",
              "unique": false
            },
            "city_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('city_city_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "city": {
              "id": 2,
              "type": "character varying(50)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 4,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841483,
          "primary": [
            "city_id"
          ],
          "unique": [],
          "relations": {
            "country_id": "public.country.country_id"
          },
          "referencedBy": {
            "city_id": [
              "public.address.city_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "city_id"
          ],
          "idToName": {
            "1": "city_id",
            "2": "city",
            "3": "country_id",
            "4": "last_update"
          },
          "rels": {
            "public.city.country_id-public.country.country_id": "M-1",
            "public.city.city_id-public.address.city_id": "1-M"
          },
          "rels_new": {
            "public.city.country_id-public.country.country_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.city.city_id-public.address.city_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "address": {
        "properties": {
          "schema_name": "public",
          "table_name": "address",
          "columns": {
            "address_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('address_address_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "address": {
              "id": 2,
              "type": "character varying(50)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "address2": {
              "id": 3,
              "type": "character varying(50)",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "district": {
              "id": 4,
              "type": "character varying(20)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "postal_code": {
              "id": 6,
              "type": "character varying(10)",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "phone": {
              "id": 7,
              "type": "character varying(20)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 8,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "city_id": {
              "id": 5,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.city.city_id",
              "unique": false
            }
          },
          "id": 18841476,
          "primary": [
            "address_id"
          ],
          "unique": [],
          "relations": {
            "city_id": "public.city.city_id"
          },
          "referencedBy": {
            "address_id": [
              "public.store.address_id",
              "public.staff.address_id",
              "public.customer.address_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "address_id"
          ],
          "idToName": {
            "1": "address_id",
            "2": "address",
            "3": "address2",
            "4": "district",
            "5": "city_id",
            "6": "postal_code",
            "7": "phone",
            "8": "last_update"
          },
          "rels": {
            "public.address.address_id-public.store.address_id": "1-M",
            "public.address.address_id-public.staff.address_id": "1-M",
            "public.address.city_id-public.city.city_id": "M-1",
            "public.address.address_id-public.customer.address_id": "1-M"
          },
          "rels_new": {
            "public.address.address_id-public.store.address_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.address.address_id-public.staff.address_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.address.city_id-public.city.city_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.address.address_id-public.customer.address_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "film_category": {
        "properties": {
          "schema_name": "public",
          "table_name": "film_category",
          "columns": {
            "film_id": {
              "id": 1,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.film.film_id",
              "unique": false
            },
            "category_id": {
              "id": 2,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": true,
              "fk_col": "public.category.category_id",
              "unique": false
            },
            "last_update": {
              "id": 3,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841465,
          "primary": [
            "film_id",
            "category_id"
          ],
          "unique": [],
          "relations": {
            "category_id": "public.category.category_id",
            "film_id": "public.film.film_id"
          },
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "film_id",
            "2": "category_id",
            "3": "last_update"
          },
          "rels": {
            "public.film_category.category_id-public.category.category_id": "M-1",
            "public.film_category.film_id-public.film.film_id": "M-1"
          },
          "rels_new": {
            "public.film_category.category_id-public.category.category_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.film_category.film_id-public.film.film_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "film_actor": {
        "properties": {
          "schema_name": "public",
          "table_name": "film_actor",
          "columns": {
            "actor_id": {
              "id": 1,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": true,
              "fk_col": "public.actor.actor_id",
              "unique": false
            },
            "film_id": {
              "id": 2,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": true,
              "foreign": true,
              "fk_col": "public.film.film_id",
              "unique": false
            },
            "last_update": {
              "id": 3,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841461,
          "primary": [
            "actor_id",
            "film_id"
          ],
          "unique": [],
          "relations": {
            "actor_id": "public.actor.actor_id",
            "film_id": "public.film.film_id"
          },
          "referencedBy": {},
          "uindex": {},
          "notnulls": [],
          "serials": [],
          "idToName": {
            "1": "actor_id",
            "2": "film_id",
            "3": "last_update"
          },
          "rels": {
            "public.film_actor.actor_id-public.actor.actor_id": "M-1",
            "public.film_actor.film_id-public.film.film_id": "M-1"
          },
          "rels_new": {
            "public.film_actor.actor_id-public.actor.actor_id": {
              "type": "M-1",
              "direct": "out"
            },
            "public.film_actor.film_id-public.film.film_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "film": {
        "properties": {
          "schema_name": "public",
          "table_name": "film",
          "columns": {
            "description": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "title": {
              "id": 2,
              "type": "character varying(255)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "language_id": {
              "id": 5,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.language.language_id",
              "unique": false
            },
            "last_update": {
              "id": 11,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "rating": {
              "id": 10,
              "type": "mpaa_rating",
              "default": "'G'::mpaa_rating",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "replacement_cost": {
              "id": 9,
              "type": "numeric(5,2)",
              "default": "19.99",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "length": {
              "id": 8,
              "type": "smallint",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "rental_rate": {
              "id": 7,
              "type": "numeric(4,2)",
              "default": "4.99",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "rental_duration": {
              "id": 6,
              "type": "smallint",
              "default": "3",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "release_year": {
              "id": 4,
              "type": "year",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "film_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('film_film_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "fulltext": {
              "id": 13,
              "type": "tsvector",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "special_features": {
              "id": 12,
              "type": "text[]",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841449,
          "primary": [
            "film_id"
          ],
          "unique": [],
          "relations": {
            "language_id": "public.language.language_id"
          },
          "referencedBy": {
            "film_id": [
              "public.inventory.film_id",
              "public.film_category.film_id",
              "public.film_actor.film_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "film_id"
          ],
          "idToName": {
            "1": "film_id",
            "2": "title",
            "3": "description",
            "4": "release_year",
            "5": "language_id",
            "6": "rental_duration",
            "7": "rental_rate",
            "8": "length",
            "9": "replacement_cost",
            "10": "rating",
            "11": "last_update",
            "12": "special_features",
            "13": "fulltext"
          },
          "rels": {
            "public.film.film_id-public.inventory.film_id": "1-M",
            "public.film.film_id-public.film_category.film_id": "1-M",
            "public.film.film_id-public.film_actor.film_id": "1-M",
            "public.film.language_id-public.language.language_id": "M-1"
          },
          "rels_new": {
            "public.film.film_id-public.inventory.film_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.film.film_id-public.film_category.film_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.film.film_id-public.film_actor.film_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.film.language_id-public.language.language_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      },
      "category": {
        "properties": {
          "schema_name": "public",
          "table_name": "category",
          "columns": {
            "name": {
              "id": 2,
              "type": "character varying(25)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 3,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "category_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('category_category_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841442,
          "primary": [
            "category_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {
            "category_id": [
              "public.film_category.category_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "category_id"
          ],
          "idToName": {
            "1": "category_id",
            "2": "name",
            "3": "last_update"
          },
          "rels": {
            "public.category.category_id-public.film_category.category_id": "1-M"
          },
          "rels_new": {
            "public.category.category_id-public.film_category.category_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "actor": {
        "properties": {
          "schema_name": "public",
          "table_name": "actor",
          "columns": {
            "actor_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('actor_actor_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 4,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "first_name": {
              "id": 2,
              "type": "character varying(45)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_name": {
              "id": 3,
              "type": "character varying(45)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841435,
          "primary": [
            "actor_id"
          ],
          "unique": [],
          "relations": {},
          "referencedBy": {
            "actor_id": [
              "public.film_actor.actor_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "actor_id"
          ],
          "idToName": {
            "1": "actor_id",
            "2": "first_name",
            "3": "last_name",
            "4": "last_update"
          },
          "rels": {
            "public.actor.actor_id-public.film_actor.actor_id": "1-M"
          },
          "rels_new": {
            "public.actor.actor_id-public.film_actor.actor_id": {
              "type": "1-M",
              "direct": "in"
            }
          }
        }
      },
      "customer": {
        "properties": {
          "schema_name": "public",
          "table_name": "customer",
          "columns": {
            "active": {
              "id": 10,
              "type": "integer",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "create_date": {
              "id": 8,
              "type": "date",
              "default": "('now'::text)::date",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "activebool": {
              "id": 7,
              "type": "boolean",
              "default": "true",
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "email": {
              "id": 5,
              "type": "character varying(50)",
              "default": null,
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_name": {
              "id": 4,
              "type": "character varying(45)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "first_name": {
              "id": 3,
              "type": "character varying(45)",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "store_id": {
              "id": 2,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "address_id": {
              "id": 6,
              "type": "smallint",
              "default": null,
              "not_null": "true",
              "primary": false,
              "foreign": true,
              "fk_col": "public.address.address_id",
              "unique": false
            },
            "customer_id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('customer_customer_id_seq'::regclass)",
              "not_null": "true",
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_update": {
              "id": 9,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": "false",
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 18841424,
          "primary": [
            "customer_id"
          ],
          "unique": [],
          "relations": {
            "address_id": "public.address.address_id"
          },
          "referencedBy": {
            "customer_id": [
              "public.rental.customer_id",
              "public.payment.customer_id"
            ]
          },
          "uindex": {},
          "notnulls": [],
          "serials": [
            "customer_id"
          ],
          "idToName": {
            "1": "customer_id",
            "2": "store_id",
            "3": "first_name",
            "4": "last_name",
            "5": "email",
            "6": "address_id",
            "7": "activebool",
            "8": "create_date",
            "9": "last_update",
            "10": "active"
          },
          "rels": {
            "public.customer.customer_id-public.rental.customer_id": "1-M",
            "public.customer.customer_id-public.payment.customer_id": "1-M",
            "public.customer.address_id-public.address.address_id": "M-1"
          },
          "rels_new": {
            "public.customer.customer_id-public.rental.customer_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.customer.customer_id-public.payment.customer_id": {
              "type": "1-M",
              "direct": "in"
            },
            "public.customer.address_id-public.address.address_id": {
              "type": "M-1",
              "direct": "out"
            }
          }
        }
      }
    }
  },
  "idToName": {
    "19330923.7": [
      "public",
      "schema_defs",
      "last_sync"
    ],
    "19330923.1": [
      "public",
      "schema_defs",
      "db_id"
    ],
    "19330923.2": [
      "public",
      "schema_defs",
      "custom_columns"
    ],
    "19330923.8": [
      "public",
      "schema_defs",
      "def"
    ],
    "19330923.6": [
      "public",
      "schema_defs",
      "enum_tables"
    ],
    "19330923.5": [
      "public",
      "schema_defs",
      "sync_error"
    ],
    "19330923.4": [
      "public",
      "schema_defs",
      "last_sync_attempt_time"
    ],
    "19330923.3": [
      "public",
      "schema_defs",
      "last_sync_success_time"
    ],
    "19167879.2": [
      "public",
      "users",
      "pass"
    ],
    "19167879.1": [
      "public",
      "users",
      "nick"
    ],
    "19081600.1": [
      "public",
      "test_table15",
      "display_type_id"
    ],
    "19081600.2": [
      "public",
      "test_table15",
      "created_at"
    ],
    "19081588.3": [
      "public",
      "test_table14",
      "created_at"
    ],
    "19081588.1": [
      "public",
      "test_table14",
      "display_type_id"
    ],
    "19081588.2": [
      "public",
      "test_table14",
      "name"
    ],
    "19081577.3": [
      "public",
      "test_table12",
      "created_at"
    ],
    "19081577.1": [
      "public",
      "test_table12",
      "display_type_id"
    ],
    "19081577.2": [
      "public",
      "test_table12",
      "name"
    ],
    "19081566.2": [
      "public",
      "test_table4",
      "name"
    ],
    "19081566.1": [
      "public",
      "test_table4",
      "display_type_id"
    ],
    "19081566.3": [
      "public",
      "test_table4",
      "created_at"
    ],
    "19077558.1": [
      "public",
      "schema_defs_temp3",
      "db_id"
    ],
    "19077558.4": [
      "public",
      "schema_defs_temp3",
      "last_sync"
    ],
    "19077558.5": [
      "public",
      "schema_defs_temp3",
      "def"
    ],
    "19077558.3": [
      "public",
      "schema_defs_temp3",
      "enum_tables"
    ],
    "19077558.2": [
      "public",
      "schema_defs_temp3",
      "custom_columns"
    ],
    "19077542.1": [
      "public",
      "schema_defs_temp",
      "db_id"
    ],
    "19077542.2": [
      "public",
      "schema_defs_temp",
      "custom_columns"
    ],
    "19077542.3": [
      "public",
      "schema_defs_temp",
      "enum_tables"
    ],
    "19077542.4": [
      "public",
      "schema_defs_temp",
      "last_sync"
    ],
    "19077542.5": [
      "public",
      "schema_defs_temp",
      "def"
    ],
    "18975222.9": [
      "public",
      "sample_unique_key_table",
      "age"
    ],
    "18975222.1": [
      "public",
      "sample_unique_key_table",
      "id"
    ],
    "18975222.8": [
      "public",
      "sample_unique_key_table",
      "name"
    ],
    "18975222.3": [
      "public",
      "sample_unique_key_table",
      "col2"
    ],
    "18975222.2": [
      "public",
      "sample_unique_key_table",
      "col1"
    ],
    "18975222.7": [
      "public",
      "sample_unique_key_table",
      "col6"
    ],
    "18975222.6": [
      "public",
      "sample_unique_key_table",
      "col5"
    ],
    "18975222.5": [
      "public",
      "sample_unique_key_table",
      "col4"
    ],
    "18975222.10": [
      "public",
      "sample_unique_key_table",
      "roll_no"
    ],
    "18975222.13": [
      "public",
      "sample_unique_key_table",
      "col9"
    ],
    "18975222.12": [
      "public",
      "sample_unique_key_table",
      "col7"
    ],
    "18975222.11": [
      "public",
      "sample_unique_key_table",
      "test_col"
    ],
    "18975222.4": [
      "public",
      "sample_unique_key_table",
      "col3"
    ],
    "18934282.4": [
      "public",
      "test5",
      "created_at"
    ],
    "18934282.1": [
      "public",
      "test5",
      "rawtab_id"
    ],
    "18934282.2": [
      "public",
      "test5",
      "rawtabs"
    ],
    "18934282.3": [
      "public",
      "test5",
      "tab_order"
    ],
    "18926395.1": [
      "public",
      "test3",
      "c1"
    ],
    "18925952.1": [
      "public",
      "test1",
      "c1"
    ],
    "18925952.2": [
      "public",
      "test1",
      "c2"
    ],
    "18925952.3": [
      "public",
      "test1",
      "c3"
    ],
    "18854581.1": [
      "public",
      "sample_table",
      "db_id"
    ],
    "18854581.3": [
      "public",
      "sample_table",
      "enum_tables"
    ],
    "18854581.6": [
      "public",
      "sample_table",
      "required"
    ],
    "18854581.4": [
      "public",
      "sample_table",
      "last_sync"
    ],
    "18854581.2": [
      "public",
      "sample_table",
      "custom_columns"
    ],
    "18854581.5": [
      "public",
      "sample_table",
      "def"
    ],
    "18854571.1": [
      "public",
      "databases",
      "db_id"
    ],
    "18854571.2": [
      "public",
      "databases",
      "created_at"
    ],
    "18854411.2": [
      "public",
      "test_company_4",
      "name"
    ],
    "18854411.4": [
      "public",
      "test_company_4",
      "address"
    ],
    "18854411.5": [
      "public",
      "test_company_4",
      "salary"
    ],
    "18854411.1": [
      "public",
      "test_company_4",
      "id"
    ],
    "18854411.3": [
      "public",
      "test_company_4",
      "age"
    ],
    "18854308.4": [
      "public",
      "test_company_new",
      "address"
    ],
    "18854308.3": [
      "public",
      "test_company_new",
      "age"
    ],
    "18854308.2": [
      "public",
      "test_company_new",
      "name"
    ],
    "18854308.1": [
      "public",
      "test_company_new",
      "id"
    ],
    "18854308.5": [
      "public",
      "test_company_new",
      "salary"
    ],
    "18854252.4": [
      "public",
      "test_company_3",
      "address"
    ],
    "18854252.3": [
      "public",
      "test_company_3",
      "age"
    ],
    "18854252.2": [
      "public",
      "test_company_3",
      "name"
    ],
    "18854252.5": [
      "public",
      "test_company_3",
      "salary"
    ],
    "18854252.1": [
      "public",
      "test_company_3",
      "id"
    ],
    "18854195.2": [
      "public",
      "test_company",
      "name"
    ],
    "18854195.1": [
      "public",
      "test_company",
      "id"
    ],
    "18854195.5": [
      "public",
      "test_company",
      "salary"
    ],
    "18854195.4": [
      "public",
      "test_company",
      "address"
    ],
    "18854195.3": [
      "public",
      "test_company",
      "age"
    ],
    "18854136.5": [
      "public",
      "test_contact",
      "how_you_know_us"
    ],
    "18854136.4": [
      "public",
      "test_contact",
      "question"
    ],
    "18854136.3": [
      "public",
      "test_contact",
      "email"
    ],
    "18854136.2": [
      "public",
      "test_contact",
      "name"
    ],
    "18854136.6": [
      "public",
      "test_contact",
      "company"
    ],
    "18854136.7": [
      "public",
      "test_contact",
      "created_at"
    ],
    "18854136.1": [
      "public",
      "test_contact",
      "column_id"
    ],
    "18853887.2": [
      "public",
      "table3",
      "c2"
    ],
    "18853887.1": [
      "public",
      "table3",
      "c1"
    ],
    "18853887.4": [
      "public",
      "table3",
      "c4"
    ],
    "18853887.3": [
      "public",
      "table3",
      "c3"
    ],
    "18853887.5": [
      "public",
      "table3",
      "c5"
    ],
    "18853882.3": [
      "public",
      "table2",
      "c3"
    ],
    "18853882.1": [
      "public",
      "table2",
      "c1"
    ],
    "18853882.4": [
      "public",
      "table2",
      "c4"
    ],
    "18853882.5": [
      "public",
      "table2",
      "c5"
    ],
    "18853882.2": [
      "public",
      "table2",
      "c2"
    ],
    "18853877.2": [
      "public",
      "table1",
      "c2"
    ],
    "18853877.3": [
      "public",
      "table1",
      "c3"
    ],
    "18853877.1": [
      "public",
      "table1",
      "c1"
    ],
    "18853877.5": [
      "public",
      "table1",
      "c5"
    ],
    "18853877.4": [
      "public",
      "table1",
      "c4"
    ],
    "18841829.2": [
      "public",
      "test_tb_fk",
      "job_name"
    ],
    "18841829.3": [
      "public",
      "test_tb_fk",
      "emp_id"
    ],
    "18841829.1": [
      "public",
      "test_tb_fk",
      "job_id"
    ],
    "18841824.2": [
      "public",
      "test_tb_pk",
      "name"
    ],
    "18841824.1": [
      "public",
      "test_tb_pk",
      "emp_id"
    ],
    "18841824.3": [
      "public",
      "test_tb_pk",
      "age"
    ],
    "18841728.2": [
      "public",
      "test_table",
      "dept"
    ],
    "18841728.3": [
      "public",
      "test_table",
      "emp_id"
    ],
    "18841728.1": [
      "public",
      "test_table",
      "id"
    ],
    "18841555.3": [
      "public",
      "store",
      "address_id"
    ],
    "18841555.4": [
      "public",
      "store",
      "last_update"
    ],
    "18841555.2": [
      "public",
      "store",
      "manager_staff_id"
    ],
    "18841555.1": [
      "public",
      "store",
      "store_id"
    ],
    "18841544.6": [
      "public",
      "staff",
      "store_id"
    ],
    "18841544.3": [
      "public",
      "staff",
      "last_name"
    ],
    "18841544.2": [
      "public",
      "staff",
      "first_name"
    ],
    "18841544.4": [
      "public",
      "staff",
      "address_id"
    ],
    "18841544.11": [
      "public",
      "staff",
      "picture"
    ],
    "18841544.7": [
      "public",
      "staff",
      "active"
    ],
    "18841544.1": [
      "public",
      "staff",
      "staff_id"
    ],
    "18841544.8": [
      "public",
      "staff",
      "username"
    ],
    "18841544.9": [
      "public",
      "staff",
      "password"
    ],
    "18841544.10": [
      "public",
      "staff",
      "last_update"
    ],
    "18841544.5": [
      "public",
      "staff",
      "email"
    ],
    "18841532.1": [
      "public",
      "rental",
      "rental_id"
    ],
    "18841532.7": [
      "public",
      "rental",
      "last_update"
    ],
    "18841532.4": [
      "public",
      "rental",
      "customer_id"
    ],
    "18841532.5": [
      "public",
      "rental",
      "return_date"
    ],
    "18841532.2": [
      "public",
      "rental",
      "rental_date"
    ],
    "18841532.6": [
      "public",
      "rental",
      "staff_id"
    ],
    "18841532.3": [
      "public",
      "rental",
      "inventory_id"
    ],
    "18841526.6": [
      "public",
      "payment",
      "payment_date"
    ],
    "18841526.5": [
      "public",
      "payment",
      "amount"
    ],
    "18841526.1": [
      "public",
      "payment",
      "payment_id"
    ],
    "18841526.3": [
      "public",
      "payment",
      "staff_id"
    ],
    "18841526.4": [
      "public",
      "payment",
      "rental_id"
    ],
    "18841526.2": [
      "public",
      "payment",
      "customer_id"
    ],
    "18841514.1": [
      "public",
      "language",
      "language_id"
    ],
    "18841514.3": [
      "public",
      "language",
      "last_update"
    ],
    "18841514.2": [
      "public",
      "language",
      "name"
    ],
    "18841507.2": [
      "public",
      "inventory",
      "film_id"
    ],
    "18841507.1": [
      "public",
      "inventory",
      "inventory_id"
    ],
    "18841507.4": [
      "public",
      "inventory",
      "last_update"
    ],
    "18841507.3": [
      "public",
      "inventory",
      "store_id"
    ],
    "18841490.1": [
      "public",
      "country",
      "country_id"
    ],
    "18841490.2": [
      "public",
      "country",
      "country"
    ],
    "18841490.3": [
      "public",
      "country",
      "last_update"
    ],
    "18841483.3": [
      "public",
      "city",
      "country_id"
    ],
    "18841483.1": [
      "public",
      "city",
      "city_id"
    ],
    "18841483.2": [
      "public",
      "city",
      "city"
    ],
    "18841483.4": [
      "public",
      "city",
      "last_update"
    ],
    "18841476.1": [
      "public",
      "address",
      "address_id"
    ],
    "18841476.2": [
      "public",
      "address",
      "address"
    ],
    "18841476.3": [
      "public",
      "address",
      "address2"
    ],
    "18841476.4": [
      "public",
      "address",
      "district"
    ],
    "18841476.6": [
      "public",
      "address",
      "postal_code"
    ],
    "18841476.7": [
      "public",
      "address",
      "phone"
    ],
    "18841476.8": [
      "public",
      "address",
      "last_update"
    ],
    "18841476.5": [
      "public",
      "address",
      "city_id"
    ],
    "18841465.1": [
      "public",
      "film_category",
      "film_id"
    ],
    "18841465.2": [
      "public",
      "film_category",
      "category_id"
    ],
    "18841465.3": [
      "public",
      "film_category",
      "last_update"
    ],
    "18841461.1": [
      "public",
      "film_actor",
      "actor_id"
    ],
    "18841461.2": [
      "public",
      "film_actor",
      "film_id"
    ],
    "18841461.3": [
      "public",
      "film_actor",
      "last_update"
    ],
    "18841449.3": [
      "public",
      "film",
      "description"
    ],
    "18841449.2": [
      "public",
      "film",
      "title"
    ],
    "18841449.5": [
      "public",
      "film",
      "language_id"
    ],
    "18841449.11": [
      "public",
      "film",
      "last_update"
    ],
    "18841449.10": [
      "public",
      "film",
      "rating"
    ],
    "18841449.9": [
      "public",
      "film",
      "replacement_cost"
    ],
    "18841449.8": [
      "public",
      "film",
      "length"
    ],
    "18841449.7": [
      "public",
      "film",
      "rental_rate"
    ],
    "18841449.6": [
      "public",
      "film",
      "rental_duration"
    ],
    "18841449.4": [
      "public",
      "film",
      "release_year"
    ],
    "18841449.1": [
      "public",
      "film",
      "film_id"
    ],
    "18841449.13": [
      "public",
      "film",
      "fulltext"
    ],
    "18841449.12": [
      "public",
      "film",
      "special_features"
    ],
    "18841442.2": [
      "public",
      "category",
      "name"
    ],
    "18841442.3": [
      "public",
      "category",
      "last_update"
    ],
    "18841442.1": [
      "public",
      "category",
      "category_id"
    ],
    "18841435.1": [
      "public",
      "actor",
      "actor_id"
    ],
    "18841435.4": [
      "public",
      "actor",
      "last_update"
    ],
    "18841435.2": [
      "public",
      "actor",
      "first_name"
    ],
    "18841435.3": [
      "public",
      "actor",
      "last_name"
    ],
    "18841424.10": [
      "public",
      "customer",
      "active"
    ],
    "18841424.8": [
      "public",
      "customer",
      "create_date"
    ],
    "18841424.7": [
      "public",
      "customer",
      "activebool"
    ],
    "18841424.5": [
      "public",
      "customer",
      "email"
    ],
    "18841424.4": [
      "public",
      "customer",
      "last_name"
    ],
    "18841424.3": [
      "public",
      "customer",
      "first_name"
    ],
    "18841424.2": [
      "public",
      "customer",
      "store_id"
    ],
    "18841424.6": [
      "public",
      "customer",
      "address_id"
    ],
    "18841424.1": [
      "public",
      "customer",
      "customer_id"
    ],
    "18841424.9": [
      "public",
      "customer",
      "last_update"
    ]
  },
  "tidToName": {
    "18841424": [
      "public",
      "customer"
    ],
    "18841435": [
      "public",
      "actor"
    ],
    "18841442": [
      "public",
      "category"
    ],
    "18841449": [
      "public",
      "film"
    ],
    "18841461": [
      "public",
      "film_actor"
    ],
    "18841465": [
      "public",
      "film_category"
    ],
    "18841476": [
      "public",
      "address"
    ],
    "18841483": [
      "public",
      "city"
    ],
    "18841490": [
      "public",
      "country"
    ],
    "18841507": [
      "public",
      "inventory"
    ],
    "18841514": [
      "public",
      "language"
    ],
    "18841526": [
      "public",
      "payment"
    ],
    "18841532": [
      "public",
      "rental"
    ],
    "18841544": [
      "public",
      "staff"
    ],
    "18841555": [
      "public",
      "store"
    ],
    "18841728": [
      "public",
      "test_table"
    ],
    "18841824": [
      "public",
      "test_tb_pk"
    ],
    "18841829": [
      "public",
      "test_tb_fk"
    ],
    "18853877": [
      "public",
      "table1"
    ],
    "18853882": [
      "public",
      "table2"
    ],
    "18853887": [
      "public",
      "table3"
    ],
    "18854136": [
      "public",
      "test_contact"
    ],
    "18854195": [
      "public",
      "test_company"
    ],
    "18854252": [
      "public",
      "test_company_3"
    ],
    "18854308": [
      "public",
      "test_company_new"
    ],
    "18854411": [
      "public",
      "test_company_4"
    ],
    "18854571": [
      "public",
      "databases"
    ],
    "18854581": [
      "public",
      "sample_table"
    ],
    "18925952": [
      "public",
      "test1"
    ],
    "18926395": [
      "public",
      "test3"
    ],
    "18934282": [
      "public",
      "test5"
    ],
    "18975222": [
      "public",
      "sample_unique_key_table"
    ],
    "19077542": [
      "public",
      "schema_defs_temp"
    ],
    "19077558": [
      "public",
      "schema_defs_temp3"
    ],
    "19081566": [
      "public",
      "test_table4"
    ],
    "19081577": [
      "public",
      "test_table12"
    ],
    "19081588": [
      "public",
      "test_table14"
    ],
    "19081600": [
      "public",
      "test_table15"
    ],
    "19167879": [
      "public",
      "users"
    ],
    "19330923": [
      "public",
      "schema_defs"
    ]
  }
}